import React from 'react'
import './frosted-background-screenshot.css'
import { AnimatePresence, motion } from 'motion/react'

export const FrostedBackgroundScreenshot = props => {
  const { src, alt, isDark } = props

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={src}
        className={`frosted-background-screenshot ${isDark ? 'dark' : 'light'}`}
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(20px)', transition: { duration: 1 } }}
        transition={{ duration: 0.5 }}
      >
        <img src={src} alt={alt} />
      </motion.div>
    </AnimatePresence>
  )
}
