import { TypeScalePreview } from '@/components/preview/TypeScalePreview'
import { HeadingStylesPreview } from '@/components/preview/HeadingStylesPreview'
import { BodyTextPreview } from '@/components/preview/BodyTextPreview'

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-400">
      {children}
    </h2>
  )
}

function Divider() {
  return <hr className="border-zinc-800" />
}

export function ElementsView() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <SectionHeader>Type Scale</SectionHeader>
        <TypeScalePreview />
      </section>

      <Divider />

      <section className="space-y-4">
        <SectionHeader>Heading Styles</SectionHeader>
        <HeadingStylesPreview />
      </section>

      <Divider />

      <section className="space-y-4">
        <SectionHeader>Body Text</SectionHeader>
        <BodyTextPreview />
      </section>
    </div>
  )
}
