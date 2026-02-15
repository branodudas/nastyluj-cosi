// --- Meta ---
export interface MetaConfig {
  projectName: string
}

// --- Viewport ---
export interface ViewportConfig {
  minWidth: number
  maxWidth: number
}

// --- Typography ---
export interface FontConfig {
  type: 'google' | 'system' | 'custom'
  family: string
  fallback: string
  customUrl?: string
  weights: number[]
}

export interface TypeStep {
  id: string
  name: string
  label: string
  stepsFromBase: number
}

export interface HeadingStyleConfig {
  sizeStepId: string
  weight: number
  colorTokenId: string
  leading: string
  tracking: string
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize'
}

export interface BodyStyleConfig {
  sizeStepId: string
  weight: number
  colorTokenId: string
  leading: string
  tracking: string
}

export interface TypographyConfig {
  fonts: {
    primary: FontConfig
    heading: FontConfig
    mono: FontConfig
  }
  scale: {
    minBase: number
    maxBase: number
    ratio: number
    steps: TypeStep[]
  }
  lineHeights: {
    none: number
    tight: number
    snug: number
    normal: number
    relaxed: number
    loose: number
  }
  letterSpacing: {
    tight: string
    normal: string
    wide: string
    wider: string
    widest: string
  }
  headings: {
    h1: HeadingStyleConfig
    h2: HeadingStyleConfig
    h3: HeadingStyleConfig
    h4: HeadingStyleConfig
    h5: HeadingStyleConfig
    h6: HeadingStyleConfig
  }
  body: BodyStyleConfig
  caption: BodyStyleConfig
}

// --- Spacing ---
export interface SpacingStep {
  id: string
  name: string
  label: string
  multiplier: number
}

export interface ContainerConfig {
  id: string
  name: string
  value: number
}

export interface SpacingConfig {
  baseUnit: number
  scaleFactor: number
  steps: SpacingStep[]
  containers: ContainerConfig[]
  gutter: string
}

// --- Colors ---
export interface OklchValue {
  l: number
  c: number
  h: number
}

export interface ColorVariants {
  hover: OklchValue
  light: OklchValue
  dark: OklchValue
  subtle: OklchValue
}

export interface ColorToken {
  id: string
  name: string
  hex: string
  oklch: OklchValue
  generateVariants: boolean
  variants?: ColorVariants
  darkModeOverride?: OklchValue
  group?: 'brand' | 'neutral' | 'semantic' | 'accent'
}

export interface SemanticAssignments {
  text: string
  textMuted: string
  background: string
  backgroundAlt: string
  border: string
  primary: string
  secondary: string
  tertiary: string
  success: string
  warning: string
  error: string
  info: string
}

export interface ColorsConfig {
  tokens: ColorToken[]
  semantic: SemanticAssignments
}

// --- Gradients ---
export interface GradientStop {
  id: string
  colorTokenId?: string
  customColor?: string
  opacity: number
  position: number
}

export interface GradientConfig {
  id: string
  name: string
  type: 'linear' | 'radial' | 'conic'
  angle: number
  stops: GradientStop[]
}

// --- Shadows ---
export interface ShadowLayer {
  offsetX: number
  offsetY: number
  blur: number
  spread: number
  colorTokenId?: string
  customColor?: string
  opacity: number
  inset: boolean
}

export interface ShadowToken {
  id: string
  name: string
  label: string
  layers: ShadowLayer[]
}

// --- Animations ---
export interface EasingConfig {
  id: string
  name: string
  label: string
  x1: number
  y1: number
  x2: number
  y2: number
  isPreset: boolean
}

export interface DurationConfig {
  id: string
  name: string
  label: string
  value: number
}

export interface AnimationsConfig {
  easings: EasingConfig[]
  durations: DurationConfig[]
}

// --- Borders ---
export interface BorderConfig {
  radiusTokens: Array<{
    id: string
    name: string
    label: string
    value: number
  }>
  widthTokens: Array<{
    id: string
    name: string
    label: string
    value: number
  }>
}

// --- Z-Index ---
export interface ZIndexConfig {
  tokens: Array<{
    id: string
    name: string
    label: string
    value: number
  }>
}

// --- ROOT STATE ---
export interface DesignSystemState {
  meta: MetaConfig
  viewport: ViewportConfig
  typography: TypographyConfig
  spacing: SpacingConfig
  colors: ColorsConfig
  gradients: GradientConfig[]
  shadows: ShadowToken[]
  animations: AnimationsConfig
  borders: BorderConfig
  zIndex: ZIndexConfig
}
