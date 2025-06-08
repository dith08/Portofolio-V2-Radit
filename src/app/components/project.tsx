'use client'
import { useState } from 'react'
import ProjectCard from './ui/ProjectCard'
import ProjectModal from './ui/ProjectModal.'

const projectList = [
  {
    image: '/img/DoctorBooking.png',
    title: 'Doctor Booking Website',
    desc: 'I created this website to make it easier to make schedules with doctors.',
    fullDesc: 'I developed a comprehensive doctor booking website that streamlines the process of scheduling medical appointments. The platform features an intuitive interface where patients can easily browse through available doctors, view their specialties and schedules, and book appointments at their convenience. The system includes real-time availability updates, appointment confirmation notifications, and a user-friendly dashboard for managing bookings. Built with modern web technologies, this solution helps reduce the friction in healthcare scheduling while providing a seamless experience for both patients and medical practitioners.',
    url: 'https://dokter-website.vercel.app/',
  },
  {
    image: '/img/SPM.png',
    title: 'Employee Absents Website',
    desc: 'For clients who want to record attendance using fingerprints and make data statistical easier.',
    fullDesc: 'I developed an advanced employee attendance system that utilizes fingerprint technology for accurate time tracking. Unfortunately, I cannot provide more detailed information about this project due to client privacy and confidentiality agreements. The system helps organizations manage workforce attendance efficiently while maintaining strict data security standards.',
    url: 'https://presensi.suryapratamamart.com/',
  },
  {
    image: '/img/TicketBooking.png',
    title: 'Ticket Order Website  ',
    desc: 'A ticket website to help users buy tickets more easily',
    fullDesc: 'I created a user-friendly ticket booking platform that simplifies the process of purchasing tickets online. The website offers a seamless booking experience with features like real-time seat selection, secure payment processing, and instant ticket confirmation. Users can easily browse through various events, compare prices, and complete their purchases in just a few clicks. The platform includes features such as e-ticket generation, booking history, and automated email notifications.',
    url: 'https://tiket-indo.vercel.app/',
  },
  {
    image: '/img/E-Commerce.png',
    title: 'E-Commerce Website',
    desc: 'I created this website to make online shopping easier.',
    fullDesc: 'I developed a full-featured e-commerce platform that provides a smooth and intuitive shopping experience. The website includes essential features such as product categorization, advanced search functionality, shopping cart management, secure checkout process, and order tracking. The platform also incorporates user reviews, wishlist functionality, and personalized product recommendations. Built with scalability in mind, it can handle multiple vendors and large product catalogs while maintaining optimal performance.',
    url: 'https://dith08.github.io/E-Commerce-Website/',
  },
  {
    image: '/img/PortofolioV1.png',
    title: 'Portofolio Website V1',
    desc: 'I created this website to make my portofolio more professional V1.',
    fullDesc: 'I designed and developed a professional portfolio website to showcase my work and skills effectively. The website features a modern, responsive design with smooth animations and intuitive navigation. It includes sections for project showcases, detailed case studies, and professional experience. The portfolio is built using the latest web technologies and follows best practices in web development, ensuring fast loading times and optimal user experience across all devices.',
    url: 'https://dith08.github.io/E-Commerce-Website/',
  },
  {
    image: '/img/Portofolio.png',
    title: 'Portofolio Website V2',
    desc: 'I created this website to make my portofolio more professional V2.',
    fullDesc: 'I designed and developed a professional portfolio website to showcase my work and skills effectively. The website features a modern, responsive design with smooth animations and intuitive navigation. It includes sections for project showcases, detailed case studies, and professional experience. The portfolio is built using the latest web technologies and follows best practices in web development, ensuring fast loading times and optimal user experience across all devices.',
    url: '#',
  },
  {
    image: '/img/MobileTicket.png',
    title: 'Ticket Order App',
    desc: 'A ticket App to help users buy tickets more easily.',
    fullDesc: "I developed a mobile ticket ordering application that brings convenience to users' fingertips. This app features a clean, intuitive interface for browsing events, selecting seats, and purchasing tickets. It includes features such as secure mobile payments, digital ticket storage, QR code generation for easy entry, and push notifications for event reminders. The app also provides real-time updates on ticket availability and event details.",
    url: '#',
  },
  {
    image: '/img/MobileTicket.png',
    title: 'Calculation Shape App',
    desc: 'I created this App to make it easier to calculate shapes.',
    fullDesc: 'I developed a mobile application that simplifies geometric calculations for various shapes. The app provides quick and accurate calculations for area, perimeter, volume, and other geometric properties. It supports a wide range of 2D and 3D shapes, features step-by-step calculation explanations, and includes visualization tools to help users better understand geometric concepts. The app is designed to be educational while maintaining a user-friendly interface.',
    url: '#',
  },
  {
    image: '/img/SertifFinalis.png',
    title: 'National Competition Certificate',
    desc: 'I am Finalist in a national level web competition.',
    fullDesc: 'I achieved finalist status in a prestigious national web development competition. The competition challenged participants to create innovative web solutions for real-world problems. My project demonstrated strong technical skills, creative problem-solving, and adherence to modern web development standards. This achievement represents my ability to compete at a national level and deliver high-quality web applications under competitive conditions.',
    url: '#',
  },
  {
    image: '/img/SertifTechomfest.png',
    title: 'National Competition Certificate',
    desc: 'I am participating in a national level web competition.',
    fullDesc: 'I participated in a national technology competition focused on web development and innovation. The competition provided a platform to showcase technical expertise and creative solutions in web development. Through this experience, I demonstrated my ability to work under pressure, meet strict technical requirements, and create web applications that solve real-world problems. This participation reflects my commitment to continuous learning and professional growth in the field of web development.',
    url: '#',
  },
]

interface Project {
  image: string;
  title: string;
  desc: string;
  fullDesc: string;
  url: string;
}


const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">My Portofolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {projectList.map((project, i) => (
          <ProjectCard key={i} {...project} onClick={() => handleOpen(project)} />
        ))}
      </div>

      <ProjectModal isOpen={isModalOpen} onClose={handleClose} project={selectedProject} />
    </section>
  );
};

export default ProjectsSection;
