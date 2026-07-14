import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'

export function useSource() {
  const [searchParams] = useSearchParams()

  return useMemo(() => {
    const raw = searchParams.get('utm_source') || 'direct'
    const source = raw.toLowerCase()
    const isPinterest = source === 'pinterest'
    const isMeta = source === 'meta' || source === 'facebook' || source === 'instagram'
    return { source: raw, isPinterest, isMeta }
  }, [searchParams])
}
