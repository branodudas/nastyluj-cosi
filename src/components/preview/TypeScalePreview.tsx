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
      {/* Column headers */}
      <div className="flex items-end gap-4 border-b border-zinc-700 pb-2 mb-0">
        <div className="w-36 shrink-0" />
        <div className="flex-1 min-w-0">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
            Mobile ({viewport.minWidth}px)
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
            Desktop ({viewport.maxWidth}px)
          </span>
        </div>
      </div>

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
            className="flex items-baseline gap-4 border-b border-zinc-800/50 py-4"
          >
            {/* Meta column */}
            <div className="w-36 shrink-0 space-y-1">
              <span className="inline-block rounded bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-300">
                --{step.name}
              </span>
              <p className="text-[10px] text-zinc-500">
                {minPx}px → {maxPx}px
              </p>
              <p className="break-all font-mono text-[9px] leading-tight text-zinc-600">
                {clamp}
              </p>
            </div>

            {/* Mobile preview */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <p
                className="truncate text-zinc-400"
                style={{ fontSize: minPx + 'px', fontFamily: font }}
              >
                The quick brown fox
              </p>
              <span className="text-[10px] text-zinc-600 font-mono">{minPx}px</span>
            </div>

            {/* Desktop preview */}
            <div className="flex-1 min-w-0 overflow-hidden">
              <p
                className="truncate text-zinc-100"
                style={{ fontSize: maxPx + 'px', fontFamily: font }}
              >
                The quick brown fox
              </p>
              <span className="text-[10px] text-zinc-600 font-mono">{maxPx}px</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
