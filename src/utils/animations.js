export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease },
  },
}

export const slideLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
}

export const slideRight = {
  hidden: { opacity: 0, x: 48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
}

export const staggerContainer = (stagger = 0.12, delay = 0.08) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})

export const viewport = { once: true, amount: 0.2 }
