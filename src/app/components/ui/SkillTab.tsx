const SkillTab = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
    return (

      <div className="flex gap-6 border-b-2 border-yellow-300 mb-8 p-3 sm:flex-row flex-col items-center">
        {['Tech Stack', 'Tools'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}

            className={`text-sm font-semibold pb-2 w-full sm:w-auto ${
              activeTab === tab ? 'text-yellow-400 border-b-4 border-yellow-400' : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    )
  }
  
  export default SkillTab;