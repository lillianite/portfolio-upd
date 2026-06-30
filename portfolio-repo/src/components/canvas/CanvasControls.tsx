export default function CanvasControls({
  onZoomIn,
  onZoomOut,
  onReset,
}: {
  onZoomIn: () => void
  onZoomOut: () => void
  onReset: () => void
}) {
  return (
    <>
      {/* Watermark / hint */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <p className="text-[11px] font-mono text-gray-400 tracking-widest uppercase">
          Drag to explore · Scroll to zoom
        </p>
      </div>

      {/* Controls */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-1.5">
        <button
          onClick={onZoomIn}
          className="w-9 h-9 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all text-base font-light leading-none select-none"
          aria-label="Zoom in"
        >
          +
        </button>
        <button
          onClick={onZoomOut}
          className="w-9 h-9 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all text-base font-light leading-none select-none"
          aria-label="Zoom out"
        >
          −
        </button>
        <div className="h-px w-full bg-gray-200 my-0.5" />
        <button
          onClick={onReset}
          className="w-9 h-9 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-300 transition-all select-none"
          aria-label="Reset to center"
          title="Reset to center"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 1.5V3M7 11v1.5M1.5 7H3M11 7h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Name badge */}
      <div className="fixed top-5 left-5 pointer-events-none select-none">
        <p className="text-sm font-semibold text-gray-800 tracking-tight">
          Lillian Navales Rivera
        </p>
        <p className="text-[10px] font-mono text-gray-400 tracking-wider">Portfolio 2024</p>
      </div>
    </>
  )
}
