type ExperienceCardProps = {
    number: string
    label: string
  }
  
  const ExperienceCard = ({ number, label }: ExperienceCardProps) => {
    return (
      <div className="bg-white shadow-md px-6 py-6 rounded-xl text-center w-48 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-[#FFC423] group">
        <h3 className="text-3xl font-bold text-[#FFF019] group-hover:text-white">{number}</h3>
        <p className="mt-2 font-semibold text-gray-700 group-hover:text-white">{label}</p>
      </div>
    )
  }
  
  export default ExperienceCard