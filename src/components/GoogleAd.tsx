import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  adSlot: string
  style?: React.CSSProperties
  format?: string
  layout?: string
  fullWidthResponsive?: boolean
  adTest?: 'on' | 'off'
}

const GoogleAd: React.FC<Props> = ({ adSlot, style, format = 'auto', layout, fullWidthResponsive = true, adTest }) => {
  const adRef = useRef<HTMLModElement>(null)
  const location = useLocation()

  useEffect(() => {
    // Delay ad loading to let the lazy-loaded AdSense script initialize first.
    // adsbygoogle is pre-defined as [] in index.html, so pushes queue safely
    // even on slow mobile connections before the script finishes loading.
    const timer = setTimeout(() => {
      if (adRef.current) {
        try {
          const hasAdStatus = adRef.current.getAttribute('data-ad-status')
          const hasAdLoaded = adRef.current.getAttribute('data-adsbygoogle-status')

          if (!hasAdStatus && !hasAdLoaded) {
            ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
            ;(window as any).adsbygoogle.push({})
          }
        } catch (e) {
          // Silently handle AdSense errors (they're usually non-critical)
        }
      }
    }, 6500) // 6.5 s — after AdSense script is injected (6 s) but before it's guaranteed ready

    return () => clearTimeout(timer)
  }, [location.pathname]) // Re-run when route changes

  const attrs: any = {
    className: 'adsbygoogle',
    style: style || (layout === 'in-article' ? { display: 'block', textAlign: 'center' } : format === 'auto' ? { display: 'block' } : undefined),
    'data-ad-client': 'ca-pub-4709657806016589',
    'data-ad-slot': adSlot,
  }
  if (layout) attrs['data-ad-layout'] = layout
  if (format) attrs['data-ad-format'] = format
  if (!layout && fullWidthResponsive) attrs['data-full-width-responsive'] = 'true'
  if (adTest) attrs['data-adtest'] = adTest

  return <ins ref={adRef} {...attrs} key={`${adSlot}-${location.pathname}`} />
}

export default GoogleAd
