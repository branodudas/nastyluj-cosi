import type { TypographyConfig } from '@/types/design-system'
import { useDesignSystemStore } from '@/store/design-system-store'
import { Slider } from '@/components/ui/slider'

const LINE_HEIGHT_NAMES: (keyof TypographyConfig['lineHeights'])[] = [
  'none',
  'tight',
  'snug',
  'normal',
  'relaxed',
  'loose',
]

export function LineHeightControls() {
  const lineHeights = useDesignSystemStore((s) => s.typography.lineHeights)
  const setLineHeights = useDesignSystemStore((s) => s.setLineHeights)

  return (
    <div className="space-y-3">
      {LINE_HEIGHT_NAMES.map((name) => (
        <div key={name} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">{name}</span>
            <span className="text-xs tabular-nums text-zinc-300">
              {lineHeights[name].toFixed(3)}
            </span>
          </div>
          <Slider
            min={0.8}
            max={3}
            step={0.025}
            value={[lineHeights[name]]}
            onValueChange={([v]) => setLineHeights({ [name]: v })}
          />
        </div>
      ))}
    </div>
  )
}
