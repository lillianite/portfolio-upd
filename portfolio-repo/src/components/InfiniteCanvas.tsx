import { useRef, useCallback } from 'react'
import {
  TransformWrapper,
  TransformComponent,
  type ReactZoomPanPinchRef,
} from 'react-zoom-pan-pinch'
import { allProjects } from 'content-collections'
import BiographyNode from './canvas/BiographyNode'
import ProjectNode from './canvas/ProjectNode'
import PdfNode from './canvas/PdfNode'
import CanvasControls from './canvas/CanvasControls'
import CanvasDotGrid from './canvas/CanvasDotGrid'

// Canvas-space positions for each node (x, y in px)
const NODE_POSITIONS = {
  bio: { x: 0, y: 0 },
  pdf: { x: 60, y: 520 },
  projects: [
    { x: 580, y: -280 },
    { x: 620, y: 220 },
    { x: -620, y: -240 },
    { x: -640, y: 200 },
    { x: 280, y: -520 },
    { x: -280, y: 460 },
  ],
}

const CANVAS_SIZE = 5000
const CANVAS_HALF = CANVAS_SIZE / 2

export default function InfiniteCanvas() {
  const transformRef = useRef<ReactZoomPanPinchRef>(null)

  const handleZoomIn = useCallback(() => {
    transformRef.current?.zoomIn(0.3)
  }, [])

  const handleZoomOut = useCallback(() => {
    transformRef.current?.zoomOut(0.3)
  }, [])

  const handleReset = useCallback(() => {
    transformRef.current?.resetTransform()
  }, [])

  const projects = [...allProjects]

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#fafafa]">
      <TransformWrapper
        ref={transformRef}
        initialScale={1}
        minScale={0.25}
        maxScale={3}
        limitToBounds={false}
        centerOnInit
        smooth
        velocityAnimation={{ sensitivity: 1, animationTime: 400 }}
        panning={{ velocityDisabled: false }}
      >
        {() => (
          <>
            <TransformComponent
              wrapperStyle={{ width: '100%', height: '100%' }}
              contentStyle={{ width: `${CANVAS_SIZE}px`, height: `${CANVAS_SIZE}px`, position: 'relative' }}
            >
              <CanvasDotGrid size={CANVAS_SIZE} />

              {/* Biography */}
              <CanvasNode x={NODE_POSITIONS.bio.x} y={NODE_POSITIONS.bio.y}>
                <BiographyNode />
              </CanvasNode>

              {/* PDF */}
              <CanvasNode x={NODE_POSITIONS.pdf.x} y={NODE_POSITIONS.pdf.y}>
                <PdfNode />
              </CanvasNode>

              {/* Projects */}
              {projects.map((project, i) => {
                const pos = NODE_POSITIONS.projects[i % NODE_POSITIONS.projects.length]
                return (
                  <CanvasNode key={project._meta.path} x={pos.x} y={pos.y}>
                    <ProjectNode project={project} />
                  </CanvasNode>
                )
              })}
            </TransformComponent>

            <CanvasControls
              onZoomIn={handleZoomIn}
              onZoomOut={handleZoomOut}
              onReset={handleReset}
            />
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

function CanvasNode({
  x,
  y,
  children,
}: {
  x: number
  y: number
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `${CANVAS_HALF + x}px`,
        top: `${CANVAS_HALF + y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
    </div>
  )
}
