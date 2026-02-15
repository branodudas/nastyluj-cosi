import { useState } from 'react'
import {
  Paintbrush,
  Share2,
  Copy,
  Download,
  LayoutGrid,
  Eye,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useDesignSystemStore } from '@/store/design-system-store'

type ViewMode = 'elements' | 'mockup'

export function Header() {
  const [viewMode, setViewMode] = useState<ViewMode>('elements')
  const projectName = useDesignSystemStore((s) => s.meta.projectName)
  const setMeta = useDesignSystemStore((s) => s.setMeta)

  return (
    <header className="flex h-12 shrink-0 items-center border-b bg-zinc-950 px-4">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <Paintbrush className="size-5 text-zinc-400" />
        <span className="text-sm font-semibold tracking-tight text-zinc-100">
          Naštýluj ČOSI
        </span>
      </div>

      {/* Center: Project name */}
      <div className="mx-auto flex items-center">
        <input
          type="text"
          value={projectName}
          onChange={(e) => setMeta({ projectName: e.target.value })}
          placeholder="Project name"
          className="h-7 w-48 rounded-md border border-zinc-800 bg-zinc-900 px-2 text-center text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-600 focus:outline-none"
        />
      </div>

      {/* Right: View toggle + actions */}
      <div className="flex items-center gap-2">
        {/* Segmented view toggle */}
        <div className="flex rounded-md bg-zinc-900 p-0.5">
          <Button
            variant="ghost"
            size="xs"
            onClick={() => setViewMode('elements')}
            className={
              viewMode === 'elements'
                ? 'bg-zinc-700 text-zinc-100 hover:bg-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }
          >
            <LayoutGrid className="size-3.5" />
            Elements
          </Button>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => setViewMode('mockup')}
            className={
              viewMode === 'mockup'
                ? 'bg-zinc-700 text-zinc-100 hover:bg-zinc-700'
                : 'text-zinc-400 hover:text-zinc-200'
            }
          >
            <Eye className="size-3.5" />
            Mockup
          </Button>
        </div>

        <Separator orientation="vertical" className="h-5" />

        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-200">
          <Share2 className="size-3.5" />
          Share URL
        </Button>
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-200">
          <Copy className="size-3.5" />
          Copy CSS
        </Button>
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-200">
          <Download className="size-3.5" />
          Download .css
        </Button>
      </div>
    </header>
  )
}
