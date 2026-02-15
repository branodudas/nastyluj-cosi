import type { BodyStyleConfig } from '@/types/design-system'
import { useDesignSystemStore } from '@/store/design-system-store'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const LEADING_OPTIONS = ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'] as const
const TRACKING_OPTIONS = ['tight', 'normal', 'wide', 'wider', 'widest'] as const

interface StyleRowProps {
  label: string
  config: BodyStyleConfig
  stepOptions: { id: string; name: string }[]
  weightOptions: number[]
  onChange: (partial: Partial<BodyStyleConfig>) => void
}

function StyleRow({ label, config, stepOptions, weightOptions, onChange }: StyleRowProps) {
  return (
    <div className="space-y-1.5">
      <span className="block text-xs font-semibold uppercase text-zinc-300">
        {label}
      </span>
      <div className="grid grid-cols-2 gap-1.5">
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
      </div>
    </div>
  )
}

export function BodyControls() {
  const body = useDesignSystemStore((s) => s.typography.body)
  const caption = useDesignSystemStore((s) => s.typography.caption)
  const steps = useDesignSystemStore((s) => s.typography.scale.steps)
  const primaryWeights = useDesignSystemStore(
    (s) => s.typography.fonts.primary.weights,
  )
  const setBody = useDesignSystemStore((s) => s.setBody)
  const setCaption = useDesignSystemStore((s) => s.setCaption)

  const stepOptions = [...steps]
    .sort((a, b) => b.stepsFromBase - a.stepsFromBase)
    .map((s) => ({ id: s.id, name: s.name }))

  return (
    <div className="space-y-3">
      <StyleRow
        label="Body"
        config={body}
        stepOptions={stepOptions}
        weightOptions={primaryWeights}
        onChange={setBody}
      />
      <StyleRow
        label="Caption"
        config={caption}
        stepOptions={stepOptions}
        weightOptions={primaryWeights}
        onChange={setCaption}
      />
    </div>
  )
}
