const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="mb-10 md:mb-0 md:pr-10 text-left md:text-right">
      <h3 className="text-yellow-500 text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 max-w-xs">{subtitle}</p>
    </div>
  )
export default SectionTitle;