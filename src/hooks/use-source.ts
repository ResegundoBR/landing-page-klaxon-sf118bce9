import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'

export function useSource() {
  const [searchParams] = useSearchParams()

  return useMemo(() => {
    const source = searchParams.get('utm_source') || 'direct'
    const isPinterest = source.toLowerCase() === 'pinterest'
    return { source, isPinterest }
  }, [searchParams])
}
