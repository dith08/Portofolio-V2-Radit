type TimelineItemProps = {
    title: string
    subtitle?: string
    date: string
  }
  
  const TimelineItem = ({ title, subtitle, date }: TimelineItemProps) => (
    <div className="mb-8 last:mb-0 relative pl-6">
      <div className="absolute left-0 top-1.5 w-3 h-3 bg-yellow-400 rounded-full" />
      <h4 className="font-semibold text-gray-800">{title}</h4>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      <p className="text-xs text-yellow-500 mt-1">📅 {date}</p>
    </div>
  )
  export default TimelineItem;