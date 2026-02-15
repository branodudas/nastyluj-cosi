import { X, Plus } from 'lucide-react'
import type { TypeStep } from '@/types/design-system'
import { SCALE_RATIOS } from '@/data/font-list'
import { getTypeStepPixels } from '@/lib/typography'
import { useDesignSystemStore } from '@/store/design-system-store'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function closestRatio(value: number): string {
  let bestValue = SCALE_RATIOS[0].value as number
  let bestDiff = Math.abs(value - bestValue)
  for (const r of SCALE_RATIOS) {
    const diff = Math.abs(value - r.value)
    if (diff < bestDiff) {
      bestValue = r.value
      bestDiff = diff
    }
  }
  return String(bestValue)
}

export function TypeScaleControls() {
  const viewport = useDesignSystemStore((s) => s.viewport)
  const scale = useDesignSystemStore((s) => s.typography.scale)
  const setViewport = useDesignSystemStore((s) => s.setViewport)
  const setScale = useDesignSystemStore((s) => s.setScale)
  const addTypeStep = useDesignSystemStore((s) => s.addTypeStep)
  const removeTypeStep = useDesignSystemStore((s) => s.removeTypeStep)

  const sortedSteps = [...scale.steps].sort(
    (a, b) => b.stepsFromBase - a.stepsFromBase,
  )

  function handleAddStep() {
    const maxStep = scale.steps.reduce(
      (max, s) => Math.max(max, s.stepsFromBase),
      0,
    )
    const next = maxStep + 1
    const step: TypeStep = {
      id: `step-${next}`,
      name: `text-${next}xl`,
      label: `${next}xl`,
      stepsFromBase: next,
    }
    addTypeStep(step)
  }

  function handleStepNameChange(id: string, name: string) {
    const updated = scale.steps.map((s) =>
      s.id === id ? { ...s, name } : s,
    )
    setScale({ steps: updated })
  }

  return (
    <div className="space-y-4">
      {/* Viewport */}
      <div>
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">
          Viewport Range
        </span>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="mb-1 block text-[10px] text-zinc-500">Min (px)</label>
            <Input
              type="number"
              value={viewport.minWidth}
              onChange={(e) =>
                setViewport({ minWidth: Number(e.target.value) })
              }
              className="h-8 text-xs"
            />
          </div>
          <div>
            <label className="mb-1 block text-[10px] text-zinc-500">Max (px)</label>
            <Input
              type="number"
              value={viewport.maxWidth}
              onChange={(e) =>
                setViewport({ maxWidth: Number(e.target.value) })
              }
              className="h-8 text-xs"
            />
          </div>
        </div>
      </div>

      {/* Min Base Size */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-400">Min Base Size</span>
          <span className="text-xs tabular-nums text-zinc-300">{scale.minBase}px</span>
        </div>
        <Slider
          min={14}
          max={20}
          step={1}
          value={[scale.minBase]}
          onValueChange={([v]) => setScale({ minBase: v })}
        />
      </div>

      {/* Max Base Size */}
      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-xs font-medium text-zinc-400">Max Base Size</span>
          <span className="text-xs tabular-nums text-zinc-300">{scale.maxBase}px</span>
        </div>
        <Slider
          min={14}
          max={24}
          step={1}
          value={[scale.maxBase]}
          onValueChange={([v]) => setScale({ maxBase: v })}
        />
      </div>

      {/* Scale Ratio */}
      <div>
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">
          Scale Ratio
        </span>
        <Select
          value={closestRatio(scale.ratio)}
          onValueChange={(v) => setScale({ ratio: Number(v) })}
        >
          <SelectTrigger size="sm" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {SCALE_RATIOS.map((r) => (
              <SelectItem key={r.value} value={String(r.value)}>
                {r.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Type Steps */}
      <div>
        <span className="mb-1.5 block text-xs font-medium text-zinc-400">
          Type Steps
        </span>
        <div className="space-y-1.5">
          {sortedSteps.map((step) => {
            const { minPx, maxPx } = getTypeStepPixels(
              scale.minBase,
              scale.maxBase,
              scale.ratio,
              step.stepsFromBase,
            )
            return (
              <div
                key={step.id}
                className="flex items-center gap-1.5"
              >
                <Input
                  value={step.name}
                  onChange={(e) =>
                    handleStepNameChange(step.id, e.target.value)
                  }
                  className="h-7 flex-1 text-xs"
                />
                <span className="shrink-0 text-[10px] tabular-nums text-zinc-500">
                  {minPx}px &rarr; {maxPx}px
                </span>
                {scale.steps.length > 3 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-6 shrink-0"
                    onClick={() => removeTypeStep(step.id)}
                  >
                    <X className="size-3" />
                  </Button>
                )}
              </div>
            )
          })}
        </div>
        <Button
          variant="outline"
          size="sm"
          className="mt-2 w-full"
          onClick={handleAddStep}
        >
          <Plus className="mr-1 size-3" />
          Add Step
        </Button>
      </div>
    </div>
  )
}
