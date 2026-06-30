import { useState } from 'react'
import type { allProjects } from 'content-collections'
import ProjectModal from './ProjectModal'

type Project = (typeof allProjects)[number]

const TAG_COLORS: Record<string, string> = {
  'Brand Identity': 'bg-orange-100 text-orange-700',
  Typography: 'bg-rose-100 text-rose-700',
  'Print Design': 'bg-amber-100 text-amber-700',
  'Logo Design': 'bg-violet-100 text-violet-700',
  'Art Direction': 'bg-purple-100 text-purple-700',
  'Event Design': 'bg-cyan-100 text-cyan-700',
  'Creative Direction': 'bg-teal-100 text-teal-700',
}

const DEFAULT_COLOR = 'bg-gray-100 text-gray-600'

export default function ProjectNode({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group text-left bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
        style={{ width: 300 }}
      >
        {/* color accent strip */}
        <div className="w-8 h-0.5 bg-gray-300 mb-4 group-hover:bg-gray-500 transition-colors" />

        {project.year && (
          <p className="text-[10px] font-mono text-gray-400 mb-1 tracking-widest uppercase">
            {project.year} · {project.role ?? 'Designer'}
          </p>
        )}

        <h3 className="text-sm font-semibold text-gray-900 mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? DEFAULT_COLOR}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-4 text-[10px] font-mono text-gray-400 group-hover:text-gray-700 transition-colors">
          Click to expand →
        </p>
      </button>

      {open && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  )
}
