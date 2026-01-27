import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

type Props = {
  adSlot: string
  style?: React.CSSProperties
  format?: string
  fullWidthResponsive?: boolean
  adTest?: 'on' | 'off'
}

const GoogleAd: React.FC<Props> = ({ adSlot, style, format = 'auto', fullWidthResponsive = true, adTest }) => {
  const adRef = useRef<HTMLModElement>(null)
  const location = useLocation()

  useEffect(() => {
    // Delay ad loading to prioritize main content
    const timer = setTimeout(() => {
      if (adRef.current) {
        try {
          // Check if this element already has an ad initialized
          const hasAdStatus = adRef.current.getAttribute('data-ad-status')
          const hasAdLoaded = adRef.current.getAttribute('data-adsbygoogle-status')
          
          if (!hasAdStatus && !hasAdLoaded) {
            const adsbygoogle = (window as any).adsbygoogle || []
            adsbygoogle.push({})
          }
        } catch (e) {
          // Silently handle AdSense errors (they're usually non-critical)
        }
      }
    }, 1500) // Increased delay to improve initial page load

    return () => clearTimeout(timer)
  }, [location.pathname]) // Re-run when route changes

  const attrs: any = {
    className: 'adsbygoogle',
    style: style || (format === 'auto' ? { display: 'block' } : undefined),
    'data-ad-client': 'ca-pub-4709657806016589',
    'data-ad-slot': adSlot,
  }
  if (format) attrs['data-ad-format'] = format
  if (fullWidthResponsive) attrs['data-full-width-responsive'] = 'true'
  if (adTest) attrs['data-adtest'] = adTest

  return <ins ref={adRef} {...attrs} key={`${adSlot}-${location.pathname}`} />
}

export default GoogleAd
