import React, { useEffect, useRef, useState } from 'react'
import { useOnScreen } from '../utils/use-on-screen'

export const YouTubeVideo = ({
  videoId,
  className = 'embed-container',
  ...restProps
}) => {
  const refContainer = useRef(null)
  const isOnScreen = useOnScreen(refContainer)
  const [shouldLoad, setShouldLoad] = useState(isOnScreen)

  useEffect(() => {
    if (isOnScreen) {
      setShouldLoad(true)
    }
  }, [isOnScreen])

  return (
    <div ref={refContainer} className={className}>
      {shouldLoad ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          {...restProps}
        ></iframe>
      ) : null}
    </div>
  )
}
