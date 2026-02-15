import { useState, useEffect } from 'react'
import { useDesignSystemStore } from '@/store/design-system-store'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { SectionLabel } from '@/components/controls/SectionLabel'
import { FontPicker } from '@/components/controls/typography/FontPicker'
import { TypeScaleControls } from '@/components/controls/typography/TypeScaleControls'
import { HeadingControls } from '@/components/controls/typography/HeadingControls'
import { BodyControls } from '@/components/controls/typography/BodyControls'
import { LineHeightControls } from '@/components/controls/typography/LineHeightControls'
import { LetterSpacingControls } from '@/components/controls/typography/LetterSpacingControls'

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
        <SectionLabel info="Choose typefaces for body text, headings, and code. Google Fonts are loaded automatically. Link heading to primary to keep them in sync.">
          Fonts
        </SectionLabel>
        <div className="space-y-3">
          <FontPicker role="primary" />
          <FontPicker role="heading" />
          <FontPicker role="mono" />
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">
              Link heading to primary
            </span>
            <Switch
              checked={linked}
              onCheckedChange={setLinked}
            />
          </div>
        </div>
      </div>

      <Separator />

      {/* SCALE */}
      <div>
        <SectionLabel info="Define the mathematical relationship between font sizes. The base size and ratio generate a consistent scale. Each step produces a fluid clamp() value that interpolates smoothly between mobile and desktop viewports.">
          Scale
        </SectionLabel>
        <TypeScaleControls />
      </div>

      <Separator />

      {/* HEADINGS */}
      <div>
        <SectionLabel info="Configure each heading level (H1-H6) with a size from the type scale, font weight, line height, letter spacing, and text transform. These map directly to CSS variables in the output.">
          Headings
        </SectionLabel>
        <HeadingControls />
      </div>

      <Separator />

      {/* BODY & CAPTION */}
      <div>
        <SectionLabel info="Set the default styles for body text and captions. Body is your main paragraph style. Caption is for smaller supporting text like image descriptions and metadata.">
          Body &amp; Caption
        </SectionLabel>
        <BodyControls />
      </div>

      <Separator />

      {/* LINE HEIGHTS */}
      <div>
        <SectionLabel info="Named line height tokens used across headings and body text. Tight values work well for large headings, while normal or relaxed values improve readability for body copy.">
          Line Heights
        </SectionLabel>
        <LineHeightControls />
      </div>

      <Separator />

      {/* LETTER SPACING */}
      <div>
        <SectionLabel info="Named letter spacing (tracking) tokens. Negative values tighten text — useful for large headings. Positive values add space — useful for small uppercase labels and captions.">
          Letter Spacing
        </SectionLabel>
        <LetterSpacingControls />
      </div>
    </div>
  )
}
