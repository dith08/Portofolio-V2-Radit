import React from 'react'
import HomePage from './homepage/page'
import AboutSection from './about/page'

import EducationPage from './education/page'
import SkillsPage from './skills/page'
import PortofolioPage from './portofolio/page'
import ContactPage from './contact/page'


const Page = () => {
  return (
    <div>
      <section id='home'>
      <HomePage/>
      </section>
      <section id='about'>
      <AboutSection/>
      </section>
      <section id='skills'>
      <SkillsPage/>
      </section>
      <section id='portofolio'>
      <PortofolioPage/>
      </section>
      <section id='education'>
      <EducationPage/>
      </section>
      <section id='contact'>
      <ContactPage/>
      </section>
    </div>
  )
}

export default Page