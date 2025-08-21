  import Image from 'next/image'
  import SectionTitle from './ui/SectionTitle'
  import TimelineColumn from './ui/TimeLineColumn'


  const EducationSection = () => {
    const educations = [
      { id: '1', title: 'SDIT AL-KAUTSAR', subtitle: 'Elementary School', date: '2014 – 2020', description: '' },
      { id: '2', title: 'MTSN 2 KUDUS', subtitle: 'Junior High School', date: '2020 – 2023', description: '' },
      { id: '3', title: 'SMK Raden Umar Said', subtitle: 'Senior High School', date: '2023 – 2026', description: '' },
    ]

    const awards = [
      { id: '1', title: 'Finalist – National Software Development Competition', subtitle: 'Politeknik Jember', date: '2024', description: '' },
      { id: '2', title: 'Participant – National Software Development Competition', subtitle: 'TechomFest', date: '2025', description: '' },
    ]

    return (
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">Education</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <SectionTitle
            title="Educations 🎓 & Awards 🏆"
            subtitle="There are some formal education & awards that I've reached below"
          />

          <div className="flex-1 grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
            <TimelineColumn
              title="Educations"
              icon={<Image src="/img/School.svg" alt="Education icon" width={24} height={24} />}
              items={educations}
            />
            <TimelineColumn
              title="Awards"
              icon={<Image src="/img/Awards.svg" alt="Award icon" width={24} height={24} />}
              items={awards}
            />
          </div>
        </div>
      </section>
    )
  }  
  export default EducationSection