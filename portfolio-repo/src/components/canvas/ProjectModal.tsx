import { useEffect } from 'react'
import type { allProjects } from 'content-collections'

type Project = (typeof allProjects)[number]

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        {project.year && (
          <p className="text-[10px] font-mono text-gray-400 mb-1 tracking-widest uppercase">
            {project.year} · {project.role ?? 'Designer'}
          </p>
        )}

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h2>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">{project.description}</p>

        <div className="prose prose-sm text-gray-700 mb-6">
          <p className="leading-relaxed">{project.content}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-xs font-mono">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-gray-900 underline underline-offset-2"
            >
              Live project ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-gray-900 underline underline-offset-2"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
