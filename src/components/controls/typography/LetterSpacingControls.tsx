import type { TypographyConfig } from '@/types/design-system'
import { useDesignSystemStore } from '@/store/design-system-store'
import { Slider } from '@/components/ui/slider'

const TRACKING_NAMES: (keyof TypographyConfig['letterSpacing'])[] = [
  'tight',
  'normal',
  'wide',
  'wider',
  'widest',
]

function parseEm(value: string): number {
  return parseFloat(value.replace('em', ''))
}

export function LetterSpacingControls() {
  const letterSpacing = useDesignSystemStore((s) => s.typography.letterSpacing)
  const setLetterSpacing = useDesignSystemStore((s) => s.setLetterSpacing)

  return (
    <div className="space-y-3">
      {TRACKING_NAMES.map((name) => {
        const numericValue = parseEm(letterSpacing[name])
        return (
          <div key={name} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs text-zinc-400">{name}</span>
              <span className="text-xs tabular-nums text-zinc-300">
                {numericValue.toFixed(3)}em
              </span>
            </div>
            <Slider
              min={-0.1}
              max={0.2}
              step={0.005}
              value={[numericValue]}
              onValueChange={([v]) =>
                setLetterSpacing({ [name]: v.toFixed(3) + 'em' })
              }
            />
          </div>
        )
      })}
    </div>
  )
}
