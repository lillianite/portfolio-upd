import { createFileRoute } from '@tanstack/react-router'
import InfiniteCanvas from '@/components/InfiniteCanvas'

export const Route = createFileRoute('/')({
  component: CanvasPortfolio,
})

function CanvasPortfolio() {
  return <InfiniteCanvas />
}
