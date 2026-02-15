import {
  Type,
  Space,
  Palette,
  Blend,
  Layers,
  Zap,
  Square,
  Hash,
} from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { ScrollArea } from '@/components/ui/scroll-area'
import { TypographySection } from '@/components/controls/typography/TypographySection'

const sections = [
  { value: 'typography', label: 'Typography', icon: Type },
  { value: 'spacing', label: 'Spacing', icon: Space },
  { value: 'colors', label: 'Colors', icon: Palette },
  { value: 'gradients', label: 'Gradients', icon: Blend },
  { value: 'shadows', label: 'Shadows', icon: Layers },
  { value: 'animations', label: 'Animations', icon: Zap },
  { value: 'borders', label: 'Borders', icon: Square },
  { value: 'zindex', label: 'Z-Index', icon: Hash },
] as const

function SectionContent({ value }: { value: string }) {
  if (value === 'typography') {
    return <TypographySection />
  }
  return (
    <p className="text-sm text-zinc-500">
      {value.charAt(0).toUpperCase() + value.slice(1)} controls — coming soon
    </p>
  )
}

export function LeftPanel() {
  return (
    <aside className="w-80 shrink-0 border-r bg-zinc-950">
      <ScrollArea className="h-full">
        <div className="p-4">
          <Accordion type="multiple" defaultValue={['typography']}>
            {sections.map(({ value, label, icon: Icon }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger>
                  <span className="flex items-center gap-2">
                    <Icon className="size-4 text-zinc-400" />
                    {label}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <SectionContent value={value} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollArea>
    </aside>
  )
}
