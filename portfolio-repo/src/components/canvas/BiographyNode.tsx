export default function BiographyNode() {
  return (
    <div
      className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8"
      style={{ width: 420 }}
    >
      <div className="flex items-start gap-5 mb-6">
        <img
          src="/headshot-on-white.jpg"
          alt="Lillian Rivera"
          className="w-16 h-16 rounded-full object-cover shrink-0 border border-gray-100"
        />
        <div>
          <h1 className="text-xl font-semibold text-gray-900 leading-tight">
            Lillian Navales Rivera
          </h1>
          <p className="text-sm text-gray-500 mt-0.5 font-mono tracking-wide">
            Graphic & Visual Designer · Bacolod, Philippines
          </p>
        </div>
      </div>

      <p className="text-sm text-gray-700 leading-relaxed mb-5">
        Filipino visual designer and Communications graduate (Cum Laude, University of St. La
        Salle – Bacolod) focused on brand identity development and design communication. I help
        organizations and brands communicate with clarity — from logo marks and type systems to
        print collateral and full campaign rollouts.
      </p>

      <p className="text-sm text-gray-700 leading-relaxed mb-6">
        My work spans grassroots community initiatives, national literary institutions, and
        arts organizations — always grounded in a brief-to-result process that balances concept,
        craft, and deadline.
      </p>

      <div className="flex flex-wrap gap-2">
        {['Brand Identity', 'Typography', 'Print Design', 'Art Direction', 'Adobe Creative Suite', 'Figma'].map((skill) => (
          <span
            key={skill}
            className="text-xs font-mono px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-gray-100 flex gap-4 text-xs font-mono text-gray-500">
        <a href="mailto:lillian.navales@gmail.com" className="hover:text-gray-900 transition-colors">
          Email ↗
        </a>
      </div>
    </div>
  )
}
