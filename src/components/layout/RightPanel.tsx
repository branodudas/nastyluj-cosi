import { ScrollArea } from '@/components/ui/scroll-area'

export function RightPanel() {
  return (
    <main className="flex-1 bg-zinc-900">
      <ScrollArea className="h-full">
        <div className="p-6">
          <p className="text-sm text-zinc-500">
            Elements view — coming soon
          </p>
        </div>
      </ScrollArea>
    </main>
  )
}
