import dynamic from 'next/dynamic'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import IDE from './ide'
import Navbar from './navbar'

const TerminalIDE = dynamic(() => import('./terminal'), { ssr: false })

export function Playground() {
  return (
    <ResizablePanelGroup direction="vertical" className="min-h-screen">
      <ResizablePanel defaultSize={8}>
        <Navbar />
      </ResizablePanel>
      <ResizablePanel defaultSize={92}>
        <ResizablePanelGroup direction="horizontal" className="border">
          <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">File Explorer</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={75} minSize={10}>
                <IDE />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={25} minSize={10}>
                <TerminalIDE />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">Browser</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
