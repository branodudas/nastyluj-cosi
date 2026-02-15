import { useDesignSystemStore } from '@/store/design-system-store'
import { getTypeStepPixels, getTypeStepClamp } from '@/lib/typography'
import type { HeadingStyleConfig } from '@/types/design-system'

export function TypeScalePreview() {
  const typography = useDesignSystemStore((s) => s.typography)
  const viewport = useDesignSystemStore((s) => s.viewport)

  const { minBase, maxBase, ratio, steps } = typography.scale
  const primaryFont = typography.fonts.primary.family
  const headingFont = typography.fonts.heading.family

  const headingSizeStepIds = new Set(
    Object.values(typography.headings as Record<string, HeadingStyleConfig>).map(
      (h) => h.sizeStepId,
    ),
  )

  const sorted = [...steps].sort((a, b) => b.stepsFromBase - a.stepsFromBase)

  return (
    <div className="space-y-0">
      {sorted.map((step) => {
        const { minPx, maxPx } = getTypeStepPixels(minBase, maxBase, ratio, step.stepsFromBase)
        const clamp = getTypeStepClamp(
          minBase,
          maxBase,
          ratio,
          step.stepsFromBase,
          viewport.minWidth,
          viewport.maxWidth,
        )
        const isHeading = headingSizeStepIds.has(step.id)
        const font = isHeading ? headingFont : primaryFont

        return (
          <div
            key={step.id}
            className="flex items-baseline gap-6 border-b border-zinc-800 py-4"
          >
            <div className="w-48 shrink-0 space-y-1">
              <span className="inline-block rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-300">
                --text-{step.name}
              </span>
              <p className="text-xs text-zinc-500">
                {minPx}px &rarr; {maxPx}px
              </p>
              <p className="break-all font-mono text-[10px] leading-tight text-zinc-600">
                {clamp}
              </p>
            </div>

            <p
              className="min-w-0 flex-1 truncate text-zinc-100"
              style={{ fontSize: maxPx + 'px', fontFamily: font }}
            >
              The quick brown fox jumps over the lazy dog
            </p>
          </div>
        )
      })}
    </div>
  )
}
