/**
 * Generates a CSS clamp() value for fluid scaling between viewports.
 */
export function generateClamp(
  minSize: number,
  maxSize: number,
  minViewport: number = 320,
  maxViewport: number = 1440,
): string {
  const slope = (maxSize - minSize) / ((maxViewport - minViewport) / 16)
  const intercept = minSize - slope * (minViewport / 16)

  const slopeVw = (slope * 100).toFixed(4)
  const interceptRem = intercept.toFixed(4)
  const minRem = minSize.toFixed(4)
  const maxRem = maxSize.toFixed(4)

  return `clamp(${minRem}rem, ${interceptRem}rem + ${slopeVw}vw, ${maxRem}rem)`
}

/**
 * Calculate type step size at a given scale position.
 */
export function calculateTypeSize(
  baseMin: number,
  baseMax: number,
  ratio: number,
  stepsFromBase: number,
): { minSize: number; maxSize: number } {
  return {
    minSize: baseMin * Math.pow(ratio, stepsFromBase),
    maxSize: baseMax * Math.pow(ratio, stepsFromBase),
  }
}

/**
 * Get the clamp() value for a specific type step.
 */
export function getTypeStepClamp(
  minBase: number,
  maxBase: number,
  ratio: number,
  stepsFromBase: number,
  minViewport: number,
  maxViewport: number,
): string {
  const { minSize, maxSize } = calculateTypeSize(
    minBase / 16,
    maxBase / 16,
    ratio,
    stepsFromBase,
  )
  return generateClamp(minSize, maxSize, minViewport, maxViewport)
}

/**
 * Compute pixel preview values for a type step at min and max viewports.
 */
export function getTypeStepPixels(
  minBase: number,
  maxBase: number,
  ratio: number,
  stepsFromBase: number,
): { minPx: number; maxPx: number } {
  const { minSize, maxSize } = calculateTypeSize(
    minBase / 16,
    maxBase / 16,
    ratio,
    stepsFromBase,
  )
  return {
    minPx: Math.round(minSize * 16 * 100) / 100,
    maxPx: Math.round(maxSize * 16 * 100) / 100,
  }
}
