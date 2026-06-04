import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * AdDebugOverlay
 *
 * On-screen diagnostic for AdSense rendering. Activated by adding
 * `?ad-debug=1` to any URL. Hidden by default for all visitors.
 *
 * Displays per-`<ins.adsbygoogle>` element:
 *  - data-ad-slot
 *  - data-ad-status      (filled / unfilled / blank)
 *  - data-adsbygoogle-status (done / pending / missing)
 *  - rendered width × height
 *
 * Plus global signals:
 *  - whether adsbygoogle.js network request resolved
 *  - whether window.adsbygoogle exists and its queue length
 *  - elapsed time since page load
 */

type AdInfo = {
  slot: string;
  adStatus: string;
  loadedStatus: string;
  width: number;
  height: number;
};

const AdDebugOverlay: React.FC = () => {
  const location = useLocation();
  const [enabled, setEnabled] = useState(false);
  const [ads, setAds] = useState<AdInfo[]>([]);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [queueLen, setQueueLen] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  // Activate when ?ad-debug=1 appears in the URL (sticky for the session).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('ad-debug') === '1') {
      sessionStorage.setItem('ad-debug', '1');
    }
    setEnabled(sessionStorage.getItem('ad-debug') === '1');
  }, [location.search]);

  // Poll DOM + globals every 500 ms while enabled.
  useEffect(() => {
    if (!enabled) return;
    const start = performance.now();

    const tick = () => {
      setElapsed(Math.round(performance.now() - start));

      // Detect adsbygoogle.js script tag
      const scriptTag = document.querySelector(
        'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
      );
      setScriptLoaded(!!scriptTag);

      const w = window as any;
      setQueueLen(Array.isArray(w.adsbygoogle) ? w.adsbygoogle.length : -1);

      // Walk every <ins class="adsbygoogle">
      const insEls = Array.from(document.querySelectorAll('ins.adsbygoogle'));
      const next: AdInfo[] = insEls.map((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        return {
          slot: el.getAttribute('data-ad-slot') || '(no-slot)',
          adStatus: el.getAttribute('data-ad-status') || '(none)',
          loadedStatus: el.getAttribute('data-adsbygoogle-status') || '(none)',
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        };
      });
      setAds(next);
    };

    tick();
    const id = window.setInterval(tick, 500);
    return () => window.clearInterval(id);
  }, [enabled, location.pathname]);

  if (!enabled) return null;

  const close = () => {
    sessionStorage.removeItem('ad-debug');
    setEnabled(false);
  };

  const statusColor = (status: string) => {
    if (status === 'filled') return '#16a34a'; // green
    if (status === 'unfilled') return '#dc2626'; // red
    return '#f59e0b'; // amber
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 8,
        right: 8,
        zIndex: 999999,
        maxWidth: 340,
        maxHeight: '60vh',
        overflow: 'auto',
        background: 'rgba(15, 23, 42, 0.95)',
        color: '#f1f5f9',
        fontFamily: 'monospace',
        fontSize: 11,
        lineHeight: 1.4,
        padding: '8px 10px',
        borderRadius: 8,
        boxShadow: '0 4px 14px rgba(0,0,0,0.4)',
        border: '1px solid #475569',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 6,
          gap: 8,
        }}
      >
        <strong style={{ color: '#fbbf24' }}>AdSense Debug</strong>
        <div style={{ display: 'flex', gap: 6 }}>
          <button
            onClick={() => setCollapsed((c) => !c)}
            style={{
              background: '#334155',
              color: '#f1f5f9',
              border: 'none',
              padding: '2px 8px',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: 11,
            }}
          >
            {collapsed ? '+' : '–'}
          </button>
          <button
            onClick={close}
            style={{
              background: '#7f1d1d',
              color: '#fee2e2',
              border: 'none',
              padding: '2px 8px',
              borderRadius: 4,
              cursor: 'pointer',
              fontSize: 11,
            }}
          >
            ×
          </button>
        </div>
      </div>

      {!collapsed && (
        <>
          <div>elapsed: {elapsed} ms</div>
          <div>
            script loaded:{' '}
            <span style={{ color: scriptLoaded ? '#16a34a' : '#dc2626' }}>
              {scriptLoaded ? 'YES' : 'no (lazy-pending)'}
            </span>
          </div>
          <div>
            adsbygoogle queue:{' '}
            {queueLen === -1 ? '(undefined)' : `${queueLen} pushed`}
          </div>
          <div style={{ marginTop: 6 }}>
            <strong>{ads.length}</strong> ad slot(s) on page:
          </div>
          {ads.length === 0 && (
            <div style={{ color: '#fca5a5', marginTop: 4 }}>
              No &lt;ins.adsbygoogle&gt; elements found in DOM
            </div>
          )}
          {ads.map((ad, i) => (
            <div
              key={i}
              style={{
                marginTop: 6,
                paddingTop: 6,
                borderTop: '1px dashed #475569',
              }}
            >
              <div>slot: {ad.slot}</div>
              <div>
                ad-status:{' '}
                <span style={{ color: statusColor(ad.adStatus) }}>
                  {ad.adStatus}
                </span>
              </div>
              <div>loaded: {ad.loadedStatus}</div>
              <div>
                size: {ad.width} × {ad.height}
                {ad.width === 0 && (
                  <span style={{ color: '#dc2626' }}> ← width=0!</span>
                )}
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: 8,
              fontSize: 10,
              color: '#94a3b8',
              borderTop: '1px solid #475569',
              paddingTop: 6,
            }}
          >
            Add ?ad-debug=1 to any URL to enable. × clears.
          </div>
        </>
      )}
    </div>
  );
};

export default AdDebugOverlay;
