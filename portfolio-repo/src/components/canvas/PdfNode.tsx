import { useState } from 'react'

export default function PdfNode() {
  const [expanded, setExpanded] = useState(false)

  if (expanded) {
    return (
      <div
        className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden"
        style={{ width: 520 }}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <span className="text-xs font-mono text-gray-500 tracking-wide">
            PORTFOLIO / RESUME
          </span>
          <div className="flex gap-2">
            <a
              href="/portfolio.pdf"
              download
              className="text-[10px] font-mono text-gray-500 hover:text-gray-800 transition-colors px-2 py-1 bg-gray-100 rounded"
            >
              Download ↓
            </a>
            <button
              onClick={() => setExpanded(false)}
              className="text-[10px] font-mono text-gray-500 hover:text-gray-800 transition-colors px-2 py-1 bg-gray-100 rounded"
            >
              Collapse ↑
            </button>
          </div>
        </div>
        <iframe
          src="/portfolio.pdf"
          title="Portfolio PDF"
          className="w-full"
          style={{ height: 640, border: 0 }}
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setExpanded(true)}
      className="group text-left bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
      style={{ width: 280 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
          📄
        </div>
        <div>
          <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Document</p>
          <p className="text-sm font-semibold text-gray-900">Portfolio & Résumé</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed mb-3">
        Full case study portfolio with résumé — PDF, 2024 edition.
      </p>
      <p className="text-[10px] font-mono text-gray-400 group-hover:text-gray-700 transition-colors">
        Click to open →
      </p>
    </button>
  )
}
