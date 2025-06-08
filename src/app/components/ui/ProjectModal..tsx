import Image from 'next/image'

const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean
  onClose: () => void
  project: { image: string; title: string; desc: string; fullDesc?: string; url: string } | null
}) => {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/70 to-gray-900/70 px-4 py-8 backdrop-blur-sm transition-opacity duration-500">
      <div className="relative bg-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden transform transition-all duration-500 scale-95 hover:scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-gray-900 transition-colors duration-300 z-20 p-2 rounded-full hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
          {/* Image Section */}
          <div className="relative w-full h-80 lg:h-[500px] rounded-2xl overflow-hidden group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              priority
              className="object-contain transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between py-4">
            <div>
              <h3 className="text-4xl font-extrabold mb-4 text-gray-900 bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-line max-h-[300px] overflow-y-auto pr-2">
                {project.fullDesc}
              </p>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <a
                href={project.url}
                target="_blank"
                className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Visit Site
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute top-0 left-0 w-24 h-24 bg-yellow-400/10 rounded-br-3xl transform -translate-x-4 -translate-y-4" />
      </div>
    </div>
  )
}

export default ProjectModal