import Image from 'next/image'

const ContactInfo = () => {
    return (
      <div className="mt-36 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col gap-6 w-full max-w-sm border border-neutral-700">
        <h2 className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">CONTACT INFO</h2>
        <div className="flex items-start gap-4 hover:bg-neutral-800/50 p-3 rounded-lg transition-all duration-200">
          <Image src="/img/Email.svg" alt="Email" width={6} height={6} className="mt-1 animate-pulse" />
          <p className="font-medium hover:text-orange-400 transition-colors">Radityasaputra620@gmail.com</p>
        </div>
        <div className="flex items-start gap-4 hover:bg-neutral-800/50 p-3 rounded-lg transition-all duration-200">
          <Image src="/img/Phone.svg" alt="Phone" width={6} height={6} className="mt-1 animate-pulse" />
          <p className="font-medium hover:text-orange-400 transition-colors">081-906-128-664</p>
        </div>
        <div className="flex items-start gap-4 hover:bg-neutral-800/50 p-3 rounded-lg transition-all duration-200">
          <Image src="/img/Location.svg" alt="Location" width={6} height={6} className="mt-1 animate-pulse" />
          <p className="font-medium hover:text-orange-400 transition-colors">RT2, RW3, Jepang Pakis, Jati, Kudus, Jawa Tengah</p>
        </div>
      </div>
    )
  }
  
  export default ContactInfo