import type { HeadingStyleConfig } from '@/types/design-system'
import { useDesignSystemStore } from '@/store/design-system-store'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
type HeadingLevel = (typeof HEADING_LEVELS)[number]

const LEADING_OPTIONS = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'] as const
const TRACKING_OPTIONS = ['tight', 'normal', 'wide', 'wider', 'widest'] as const
const TRANSFORM_OPTIONS = ['none', 'uppercase', 'lowercase', 'capitalize'] as const

interface HeadingRowProps {
  level: HeadingLevel
  config: HeadingStyleConfig
  stepOptions: { id: string; name: string }[]
  weightOptions: number[]
  onChange: (partial: Partial<HeadingStyleConfig>) => void
}

function HeadingRow({ level, config, stepOptions, weightOptions, onChange }: HeadingRowProps) {
  return (
    <div className="space-y-1.5 rounded-md border border-zinc-800 p-2">
      <span className="block text-xs font-semibold uppercase text-zinc-300">
        {level.toUpperCase()}
      </span>
      <div className="grid grid-cols-3 gap-1.5">
        {/* Size */}
        <div>
          <label className="mb-0.5 block text-[10px] text-zinc-500">Size</label>
          <Select
            value={config.sizeStepId}
            onValueChange={(v) => onChange({ sizeStepId: v })}
          >
            <SelectTrigger size="sm" className="w-full text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {stepOptions.map((s) => (
                <SelectItem key={s.id} value={s.id}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Weight */}
        <div>
          <label className="mb-0.5 block text-[10px] text-zinc-500">Weight</label>
          <Select
            value={String(config.weight)}
            onValueChange={(v) => onChange({ weight: Number(v) })}
          >
            <SelectTrigger size="sm" className="w-full text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {weightOptions.map((w) => (
                <SelectItem key={w} value={String(w)}>
                  {w}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Leading */}
        <div>
          <label className="mb-0.5 block text-[10px] text-zinc-500">Leading</label>
          <Select
            value={config.leading}
            onValueChange={(v) => onChange({ leading: v })}
          >
            <SelectTrigger size="sm" className="w-full text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LEADING_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tracking */}
        <div>
          <label className="mb-0.5 block text-[10px] text-zinc-500">Tracking</label>
          <Select
            value={config.tracking}
            onValueChange={(v) => onChange({ tracking: v })}
          >
            <SelectTrigger size="sm" className="w-full text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRACKING_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Transform */}
        <div>
          <label className="mb-0.5 block text-[10px] text-zinc-500">Transform</label>
          <Select
            value={config.transform ?? 'none'}
            onValueChange={(v) =>
              onChange({
                transform: v as HeadingStyleConfig['transform'],
              })
            }
          >
            <SelectTrigger size="sm" className="w-full text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {TRANSFORM_OPTIONS.map((opt) => (
                <SelectItem key={opt} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export function HeadingControls() {
  const headings = useDesignSystemStore((s) => s.typography.headings)
  const steps = useDesignSystemStore((s) => s.typography.scale.steps)
  const headingWeights = useDesignSystemStore(
    (s) => s.typography.fonts.heading.weights,
  )
  const setHeading = useDesignSystemStore((s) => s.setHeading)

  const stepOptions = [...steps]
    .sort((a, b) => b.stepsFromBase - a.stepsFromBase)
    .map((s) => ({ id: s.id, name: s.name }))

  return (
    <div className="space-y-2">
      <span className="block text-xs font-medium text-zinc-400">
        Heading Styles
      </span>
      {HEADING_LEVELS.map((level) => (
        <HeadingRow
          key={level}
          level={level}
          config={headings[level]}
          stepOptions={stepOptions}
          weightOptions={headingWeights}
          onChange={(partial) => setHeading(level, partial)}
        />
      ))}
    </div>
  )
}
