import { motion } from 'framer-motion'

export default function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{
        y: '4rem',
        opacity: 0,
      }}
      whileInView={{
        y: '0rem',
        opacity: 1,
      }}
      transition={{
        ease: "easeIn",
        duration: 0.6,
      }}
      style={{
        width: '100%',
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  )
}