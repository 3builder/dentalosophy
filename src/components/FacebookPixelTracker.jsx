'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function FacebookPixelTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.fbq) return
    window.fbq('track', 'PageView')
  }, [pathname, searchParams])

  return null
}
