import ProfileCard from './ui/ProfileCard'
import AboutText from './ui/AboutText'
import ExperienceCard from './ui/ExperienceCard'
import BottomText from './ui/ButtomText'

const AboutSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-20">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20">
        <ProfileCard />
        <div>
          <AboutText />
          {/* Cards */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
            <ExperienceCard number="3+" label="Years of Experience" />
            <ExperienceCard number="7+" label="Framework & Experience" />
            <ExperienceCard number="9+" label="Successed a Project" />

          </div>
          <BottomText />
        </div>
      </div>
    </section> 
  )
}
export default AboutSection;