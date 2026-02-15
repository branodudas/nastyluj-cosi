import { useRef } from 'react'
import type { FontOption } from '@/data/font-list'
import { FONT_LIST } from '@/data/font-list'
import { loadGoogleFont } from '@/lib/google-fonts'
import { useDesignSystemStore } from '@/store/design-system-store'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ROLE_LABELS = {
  primary: 'Primary Font',
  heading: 'Heading Font',
  mono: 'Mono Font',
} as const

const CATEGORIES = ['sans-serif', 'serif', 'display', 'monospace'] as const
const CATEGORY_LABELS: Record<FontOption['category'], string> = {
  'sans-serif': 'Sans Serif',
  serif: 'Serif',
  display: 'Display',
  monospace: 'Monospace',
}

const fontsByCategory = CATEGORIES.map((cat) => ({
  category: cat,
  label: CATEGORY_LABELS[cat],
  fonts: FONT_LIST.filter((f) => f.category === cat),
}))

interface FontPickerProps {
  role: 'primary' | 'heading' | 'mono'
}

export function FontPicker({ role }: FontPickerProps) {
  const font = useDesignSystemStore((s) => s.typography.fonts[role])
  const setFont = useDesignSystemStore((s) => s.setFont)
  const fontsLoadedRef = useRef(false)

  function handleOpenChange(open: boolean) {
    if (open && !fontsLoadedRef.current) {
      fontsLoadedRef.current = true
      for (const f of FONT_LIST) {
        loadGoogleFont(f.family)
      }
    }
  }

  function handleValueChange(family: string) {
    const match = FONT_LIST.find((f) => f.family === family)
    if (!match) return
    setFont(role, { family: match.family, type: 'google', fallback: match.fallback })
    loadGoogleFont(match.family)
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-zinc-400">
          {ROLE_LABELS[role]}
        </span>
        <span
          className="text-lg text-zinc-200"
          style={{ fontFamily: `"${font.family}", ${font.fallback}` }}
        >
          Ag
        </span>
      </div>

      <Select value={font.family} onValueChange={handleValueChange} onOpenChange={handleOpenChange}>
        <SelectTrigger size="sm" className="w-full">
          <SelectValue placeholder="Choose font…" />
        </SelectTrigger>
        <SelectContent className="max-h-64">
          {fontsByCategory.map((group) => (
            <SelectGroup key={group.category}>
              <SelectLabel>{group.label}</SelectLabel>
              {group.fonts.map((f) => (
                <SelectItem
                  key={f.family}
                  value={f.family}
                  style={{ fontFamily: `"${f.family}", ${f.fallback}` }}
                >
                  {f.family}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
