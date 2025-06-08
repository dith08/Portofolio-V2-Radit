import ContactForm from './ui/ContactForm'
import ContactInfo from './ui/ContactInfo'

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-8 flex flex-col lg:flex-row justify-between items-start gap-12">
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>
        <p className="text-sm text-gray-500 mb-8">
          I&apos;mam always open to discussing product design, collaborating work or <br /> partnerships.
          Just contact me with this media below
        </p>
        <ContactForm />
      </div>
      <ContactInfo />
    </section>
  )
}

export default ContactSection
