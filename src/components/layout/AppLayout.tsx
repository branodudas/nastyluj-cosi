import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { LeftPanel } from '@/components/layout/LeftPanel'
import { RightPanel } from '@/components/layout/RightPanel'
import { loadConfigFonts } from '@/lib/google-fonts'
import { useDesignSystemStore } from '@/store/design-system-store'

export function AppLayout() {
  const fonts = useDesignSystemStore((s) => s.typography.fonts)

  useEffect(() => {
    loadConfigFonts(fonts)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps -- only on mount

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Header />
      <div className="flex min-h-0 flex-1">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}
