import { ScrollArea } from '@/components/ui/scroll-area'
import { ElementsView } from '@/components/preview/ElementsView'

export function RightPanel() {
  return (
    <main className="flex-1 bg-zinc-900">
      <ScrollArea className="h-full">
        <div className="p-6">
          <ElementsView />
        </div>
      </ScrollArea>
    </main>
  )
}
