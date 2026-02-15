import { Info } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface SectionLabelProps {
  children: React.ReactNode
  info?: string
}

export function SectionLabel({ children, info }: SectionLabelProps) {
  return (
    <div className="mb-3 flex items-center gap-1.5">
      <span className="text-xs uppercase tracking-wider text-zinc-500">
        {children}
      </span>
      {info && (
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="inline-flex text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                <Info className="size-3" />
              </button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="max-w-[240px] text-xs leading-relaxed"
            >
              {info}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}
