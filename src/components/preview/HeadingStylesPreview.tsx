import { useDesignSystemStore } from '@/store/design-system-store'
import { getTypeStepPixels } from '@/lib/typography'
import type { HeadingStyleConfig } from '@/types/design-system'

const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const

export function HeadingStylesPreview() {
  const typography = useDesignSystemStore((s) => s.typography)

  const { minBase, maxBase, ratio, steps } = typography.scale
  const headingFont = typography.fonts.heading.family
  const headingFallback = typography.fonts.heading.fallback

  const stepsById = new Map(steps.map((s) => [s.id, s]))

  return (
    <div className="space-y-6">
      {HEADING_LEVELS.map((level, index) => {
        const config: HeadingStyleConfig = typography.headings[level]
        const step = stepsById.get(config.sizeStepId)

        if (!step) return null

        const { maxPx } = getTypeStepPixels(minBase, maxBase, ratio, step.stepsFromBase)
        const lineHeight = typography.lineHeights[config.leading as keyof typeof typography.lineHeights]
        const letterSpacing = typography.letterSpacing[config.tracking as keyof typeof typography.letterSpacing]
        const transform = config.transform && config.transform !== 'none' ? config.transform : undefined

        return (
          <div key={level}>
            <p
              className="text-zinc-100"
              style={{
                fontSize: maxPx + 'px',
                fontWeight: config.weight,
                fontFamily: `${headingFont}, ${headingFallback}`,
                lineHeight: lineHeight,
                letterSpacing: letterSpacing,
                textTransform: transform,
              }}
            >
              Heading {index + 1}
            </p>
            <p className="mt-1 text-xs text-zinc-500">
              var(--text-{step.name}) &middot; {config.weight} &middot; {config.leading} &middot; {config.tracking}
              {transform ? ` · ${transform}` : ''}
            </p>
          </div>
        )
      })}
    </div>
  )
}
