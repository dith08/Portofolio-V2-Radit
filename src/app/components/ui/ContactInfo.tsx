import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="mt-36 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col gap-8 w-full max-w-lg border border-neutral-700">
      {/* Title */}
      <h2 className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 tracking-wide text-center">
        CONTACT INFO
      </h2>

      {/* Email */}
      <div className="flex items-center gap-5 hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-200">
        <Image
          src="/img/Email.svg"
          alt="Email"
          width={28}
          height={28}
          className="animate-pulse"
        />
        <p className="font-medium text-lg hover:text-orange-400 transition-colors">
          Radityasaputra620@gmail.com
        </p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-5 hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-200">
        <Image
          src="/img/Phone.svg"
          alt="Phone"
          width={28}
          height={28}
          className="animate-pulse"
        />
        <p className="font-medium text-lg hover:text-orange-400 transition-colors">
          081-906-128-664
        </p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-5 hover:bg-neutral-800/50 p-4 rounded-xl transition-all duration-200">
        <Image
          src="/img/Location.svg"
          alt="Location"
          width={28}
          height={28}
          className="animate-pulse"
        />
        <p className="font-medium text-lg leading-relaxed hover:text-orange-400 transition-colors">
          RT2, RW3, Jepang Pakis, Jati, Kudus, Jawa Tengah
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
