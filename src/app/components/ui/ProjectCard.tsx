import Image from 'next/image'

const ProjectCard = ({ image, title, desc, url, onClick }: { image: string; title: string; desc: string; url: string; onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full max-w-sm overflow-hidden border border-gray-100 group"
    >
      {/* Image Container with Overlay Effect */}
      <div className="relative w-full h-56 rounded-t-2xl overflow-hidden group">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-sm font-medium bg-yellow-400/20 rounded-full px-3 py-1">Explore Project</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{desc}</p>
        <a
          href={url}
          target="_blank"
          className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-semibold py-2 px-6 rounded-full hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Visit Site
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/10 rounded-bl-3xl transform translate-x-4 -translate-y-4" />
    </div>
  )
}

export default ProjectCard