import { useDesignSystemStore } from '@/store/design-system-store'
import { getTypeStepPixels } from '@/lib/typography'

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'

const CAPTION_TEXT =
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export function BodyTextPreview() {
  const typography = useDesignSystemStore((s) => s.typography)
  const { minBase, maxBase, ratio, steps } = typography.scale
  const primaryFont = typography.fonts.primary.family
  const primaryFallback = typography.fonts.primary.fallback

  const stepsById = new Map(steps.map((s) => [s.id, s]))
  const fontStack = `${primaryFont}, ${primaryFallback}`

  // Body
  const bodyStep = stepsById.get(typography.body.sizeStepId)
  const bodyPx = bodyStep
    ? getTypeStepPixels(minBase, maxBase, ratio, bodyStep.stepsFromBase).maxPx
    : maxBase
  const bodyLineHeight =
    typography.lineHeights[typography.body.leading as keyof typeof typography.lineHeights]
  const bodyLetterSpacing =
    typography.letterSpacing[typography.body.tracking as keyof typeof typography.letterSpacing]

  // Caption
  const captionStep = stepsById.get(typography.caption.sizeStepId)
  const captionPx = captionStep
    ? getTypeStepPixels(minBase, maxBase, ratio, captionStep.stepsFromBase).maxPx
    : maxBase * 0.875
  const captionLineHeight =
    typography.lineHeights[typography.caption.leading as keyof typeof typography.lineHeights]
  const captionLetterSpacing =
    typography.letterSpacing[typography.caption.tracking as keyof typeof typography.letterSpacing]

  return (
    <div className="space-y-6">
      <p
        className="text-zinc-300"
        style={{
          fontSize: bodyPx + 'px',
          fontWeight: typography.body.weight,
          fontFamily: fontStack,
          lineHeight: bodyLineHeight,
          letterSpacing: bodyLetterSpacing,
        }}
      >
        {LOREM}
      </p>

      <p
        className="text-zinc-500"
        style={{
          fontSize: captionPx + 'px',
          fontWeight: typography.caption.weight,
          fontFamily: fontStack,
          lineHeight: captionLineHeight,
          letterSpacing: captionLetterSpacing,
        }}
      >
        {CAPTION_TEXT}
      </p>
    </div>
  )
}
