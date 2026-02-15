import { useState, useEffect } from 'react'
import { useDesignSystemStore } from '@/store/design-system-store'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { FontPicker } from '@/components/controls/typography/FontPicker'
import { TypeScaleControls } from '@/components/controls/typography/TypeScaleControls'
import { HeadingControls } from '@/components/controls/typography/HeadingControls'
import { BodyControls } from '@/components/controls/typography/BodyControls'
import { LineHeightControls } from '@/components/controls/typography/LineHeightControls'
import { LetterSpacingControls } from '@/components/controls/typography/LetterSpacingControls'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-3 block text-xs uppercase tracking-wider text-zinc-500">
      {children}
    </span>
  )
}

export function TypographySection() {
  const [linked, setLinked] = useState(false)
  const primaryFamily = useDesignSystemStore((s) => s.typography.fonts.primary.family)
  const setFont = useDesignSystemStore((s) => s.setFont)

  useEffect(() => {
    if (linked) {
      const primary = useDesignSystemStore.getState().typography.fonts.primary
      setFont('heading', {
        family: primary.family,
        type: primary.type,
        fallback: primary.fallback,
      })
    }
  }, [linked, primaryFamily, setFont])

  return (
    <div className="space-y-4">
      {/* FONTS */}
      <div>
        <SectionLabel>Fonts</SectionLabel>
        <div className="space-y-3">
          <FontPicker role="primary" />
          <FontPicker role="heading" />
          <FontPicker role="mono" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">
              Link heading to primary
            </span>
            <Switch
              size="sm"
              checked={linked}
              onCheckedChange={setLinked}
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* SCALE */}
      <div>
        <SectionLabel>Scale</SectionLabel>
        <TypeScaleControls />
      </div>

      <Separator />

      {/* HEADINGS */}
      <div>
        <SectionLabel>Headings</SectionLabel>
        <HeadingControls />
      </div>

      <Separator />

      {/* BODY & CAPTION */}
      <div>
        <SectionLabel>Body &amp; Caption</SectionLabel>
        <BodyControls />
      </div>

      <Separator />

      {/* LINE HEIGHTS */}
      <div>
        <SectionLabel>Line Heights</SectionLabel>
        <LineHeightControls />
      </div>

      <Separator />

      {/* LETTER SPACING */}
      <div>
        <SectionLabel>Letter Spacing</SectionLabel>
        <LetterSpacingControls />
      </div>
    </div>
  )
}
