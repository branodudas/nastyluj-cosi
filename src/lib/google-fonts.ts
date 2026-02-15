const loadedFonts = new Set<string>()

export function loadGoogleFont(family: string, weights: number[] = [400, 500, 600, 700]): void {
  if (loadedFonts.has(family)) return
  loadedFonts.add(family)

  const weightsStr = weights.join(';')
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weightsStr}&display=swap`

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = url
  document.head.appendChild(link)
}

export function loadConfigFonts(fonts: {
  primary: { family: string; weights: number[] }
  heading: { family: string; weights: number[] }
  mono: { family: string; weights: number[] }
}): void {
  loadGoogleFont(fonts.primary.family, fonts.primary.weights)
  loadGoogleFont(fonts.heading.family, fonts.heading.weights)
  loadGoogleFont(fonts.mono.family, fonts.mono.weights)
}
