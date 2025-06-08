// components/SkillsSection.tsx
'use client'
import { useState } from 'react'
import SkillTab from './ui/SkillTab'
import BlockPortofolio from './ui/BlockPortofolio';

const techStack = [
   { icon: '/img/HTML.svg', title: 'HTML', level: 'Advanced' },
   { icon: '/img/CSS.svg', title: 'CSS', level: 'Advanced' },
   { icon: '/img/Bootstrap.svg', title: 'Bootstrap', level: 'Basic' },
   { icon: '/img/Tailwind.svg', title: 'Tailwind CSS', level: 'Advanced' },
   { icon: '/img/JS.svg', title: 'JavaScript', level: 'Advanced' },
   { icon: '/img/TS.svg', title: 'TypeScript', level: 'Intermediate' },
   { icon: '/img/React.svg', title: 'React', level: 'Intermediate' },
   { icon: '/img/Vue.svg', title: 'Vue', level: 'Basic' },
   { icon: '/img/Next.svg', title: 'Next.js', level: 'Basic' },
   { icon: '/img/NodeJS.svg', title: 'Node.js', level: 'Basic' },
   { icon: '/img/PHP.svg', title: 'PHP', level: 'Intermediate' },
   { icon: '/img/Laravel.svg', title: 'Laravel', level: 'Intermediate' },
   { icon: '/img/MySql.svg', title: 'MySQL', level: 'Intermediate' },
   { icon: '/img/MongoDB.svg', title: 'MongoDB', level: 'Basic' },
   { icon: '/img/Java.svg', title: 'Java', level: 'Basic' },
   { icon: '/img/Kotlin.svg', title: 'Kotlin', level: 'Basic' },
   { icon: '/img/Dart.svg', title: 'Dart', level: 'Basic' },
   { icon: '/img/Flutter.svg', title: 'Flutter', level: 'Basic' },
   { icon: '/img/Python.svg', title: 'Python', level: 'Intermediate' },
   { icon: '/img/Pandas.svg', title: 'Pandas', level: 'Basic' },
   { icon: '/img/Selenium.svg', title: 'Selenium', level: 'Basic' },
];

const tools = [
   { icon: '/img/Github.svg', title: 'GitHub', level: 'Intermediate' },
   { icon: '/img/VScode.svg', title: 'VSCode', level: 'Advanced' },
   { icon: '/img/Figma.svg', title: 'Figma', level: 'Intermediate' },
   { icon: '/img/Postman.svg', title: 'Postman', level: 'Intermediate' },
   { icon: '/img/AndroidStudio.svg', title: 'Android Studio', level: 'Intermediate' },
   { icon: '/img/Git.svg', title: 'Git', level: 'Intermediate' },
   { icon: '/img/Laragon.svg', title: 'Laragon', level: 'Basic' },
   { icon: '/img/Xampp.svg', title: 'XAMPP', level: 'Basic' },
];

const SkillsSection = () => {
   const [activeTab, setActiveTab] = useState('Tech Stack')
   const data = activeTab === 'Tech Stack' ? techStack : tools

   return (
     <section className="bg-white px-4 sm:px-6 md:px-20 py-8 sm:py-16">
       <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-black">My Skills</h2>

       <div className="flex flex-col md:flex-row gap-8">
         <div className="flex-1">
           <div className="w-full md:w-[887px] h-auto md:h-[1175px] bg-white rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
             <SkillTab activeTab={activeTab} setActiveTab={setActiveTab} />
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 p-4">
               {data.map((item, i) => (
                 <div key={i} className="flex flex-col items-center group">
                   <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-50">
                     <img src={item.icon} alt={item.title} className="w-12 h-12 sm:w-14 sm:h-14 md:w-15 md:h-15 transition-transform duration-300 group-hover:rotate-12" />
                   </div>
                   <h4 className="text-sm md:text-md text-black font-bold text-center mt-2 transition-colors duration-300 group-hover:text-yellow-400">{item.title}</h4>
                   <p className="text-xs text-gray-500 font-bold text-center transition-all duration-300 group-hover:scale-105">{item.level}</p>
                 </div>
               ))}
             </div>
           </div>
         </div>

         <div className="w-full md:max-w-sm mt-8 md:mt-96">
           <h3 className="text-2xl md:text-3xl text-yellow-400 font-bold mb-2 hover:text-yellow-500 transition-colors duration-300">Tech Stack ⚙️ & Tools 🛠</h3>
           <p className="text-sm text-gray-700 font-light hover:text-gray-900 transition-colors duration-300">
             There are some tech stack and tools that I've learned and experienced
           </p>
         </div>
       </div>
       <BlockPortofolio/>
     </section>
   )
}
export default SkillsSection;