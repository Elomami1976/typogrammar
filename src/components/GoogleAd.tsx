import React, { useEffect } from 'react'

type Props = {
  adSlot: string
  style?: React.CSSProperties
  format?: string
  fullWidthResponsive?: boolean
  adTest?: 'on' | 'off'
}

const GoogleAd: React.FC<Props> = ({ adSlot, style, format = 'auto', fullWidthResponsive = true, adTest }) => {
  useEffect(() => {
    try {
      ;(window as any).adsbygoogle = (window as any).adsbygoogle || []
      ;(window as any).adsbygoogle.push({})
    } catch (e) {}
  }, [adSlot])

  const attrs: any = {
    className: 'adsbygoogle',
    style: style || (format === 'auto' ? { display: 'block' } : undefined),
    'data-ad-slot': adSlot,
  }
  if (format) attrs['data-ad-format'] = format
  if (fullWidthResponsive) attrs['data-full-width-responsive'] = 'true'
  if (adTest) attrs['data-adtest'] = adTest

  return React.createElement('ins', attrs)
}

export default GoogleAd
