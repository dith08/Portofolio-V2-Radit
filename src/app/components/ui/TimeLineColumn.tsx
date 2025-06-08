  import TimelineItem from "./TimeLineItem";

  interface TimelineItemProps {
    id: string;
    title: string;
    description: string;
    // tambahin properti lain sesuai kebutuhan
  }
  

  const TimelineColumn = ({ title, icon, items }: { title: string; icon: React.ReactNode; items: TimelineItemProps[] }) => (
    <div className="w-full md:w-1/2 px-4">
        <div className="flex items-center gap-2 mb-6 bg-[#FFC423] p-3">
          {icon}
          <h4 className="text-white font-bold text-lg">{title}</h4>
        </div>
        <div className="border-l-2 border-yellow-300 pl-4">
          {items.map((item, idx) => (
              <TimelineItem date={""} key={idx} {...item} />
          ))}
        </div>
      </div>
    )
    export default TimelineColumn