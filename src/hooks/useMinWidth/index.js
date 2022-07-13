/* eslint-disable */
import { useEffect, useState } from 'react'

const useMinWidth = minWidth => {
  const mediaQuery = matchMedia(`(min-width: ${minWidth}px)`)
  const [matches, setMatch] = useState(mediaQuery.matches)

  useEffect(() => {
    const handler = event => {
      setMatch(event.matches)
    }

    mediaQuery.addListener(handler)
    return () => mediaQuery.removeListener(handler)
  }, [])

  return matches
}

export default useMinWidth
