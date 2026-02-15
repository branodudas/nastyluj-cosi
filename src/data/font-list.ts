export interface FontOption {
  family: string
  category: 'sans-serif' | 'serif' | 'display' | 'monospace'
  fallback: string
}

export const FONT_LIST: FontOption[] = [
  // Sans-serif (20 fonts)
  { family: 'Inter', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Plus Jakarta Sans', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'DM Sans', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Outfit', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Manrope', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Nunito', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Rubik', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Work Sans', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Mulish', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Lato', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Open Sans', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Source Sans 3', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Noto Sans', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Raleway', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Poppins', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Montserrat', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Urbanist', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Barlow', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'IBM Plex Sans', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  { family: 'Figtree', category: 'sans-serif', fallback: 'system-ui, sans-serif' },
  // Serif (10 fonts)
  { family: 'Playfair Display', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'Lora', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'Merriweather', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'DM Serif Display', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'Cormorant', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'EB Garamond', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'Libre Baskerville', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'Fraunces', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'Crimson Pro', category: 'serif', fallback: 'Georgia, serif' },
  { family: 'Young Serif', category: 'serif', fallback: 'Georgia, serif' },
  // Display (4 fonts)
  { family: 'Syne', category: 'display', fallback: 'system-ui, sans-serif' },
  { family: 'Space Grotesk', category: 'display', fallback: 'system-ui, sans-serif' },
  { family: 'Familjen Grotesk', category: 'display', fallback: 'system-ui, sans-serif' },
  { family: 'Bricolage Grotesque', category: 'display', fallback: 'system-ui, sans-serif' },
  // Monospace (7 fonts)
  { family: 'JetBrains Mono', category: 'monospace', fallback: 'ui-monospace, monospace' },
  { family: 'Fira Code', category: 'monospace', fallback: 'ui-monospace, monospace' },
  { family: 'Source Code Pro', category: 'monospace', fallback: 'ui-monospace, monospace' },
  { family: 'IBM Plex Mono', category: 'monospace', fallback: 'ui-monospace, monospace' },
  { family: 'Roboto Mono', category: 'monospace', fallback: 'ui-monospace, monospace' },
  { family: 'Inconsolata', category: 'monospace', fallback: 'ui-monospace, monospace' },
  { family: 'Geist Mono', category: 'monospace', fallback: 'ui-monospace, monospace' },
]

export const SCALE_RATIOS = [
  { value: 1.067, label: 'Minor Second (1.067)' },
  { value: 1.125, label: 'Major Second (1.125)' },
  { value: 1.2, label: 'Minor Third (1.200)' },
  { value: 1.25, label: 'Major Third (1.250)' },
  { value: 1.333, label: 'Perfect Fourth (1.333)' },
  { value: 1.414, label: 'Augmented Fourth (1.414)' },
  { value: 1.5, label: 'Perfect Fifth (1.500)' },
  { value: 1.618, label: 'Golden Ratio (1.618)' },
] as const
