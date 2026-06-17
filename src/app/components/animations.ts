export const appearEasing = [1, 0, 0.62, 1] as const;
export const navEasing = [1, 0.02, 0.69, 1] as const;

export const fadeSlideUp = {
  initial: { opacity: 0.001, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const fadeScaleIn = {
  initial: { opacity: 0.001, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export const navReveal = {
  initial: { opacity: 0.001, y: -30 },
  animate: { opacity: 1, y: 0 },
};
