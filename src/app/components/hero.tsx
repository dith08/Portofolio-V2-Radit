import Image from "next/image";
import DownloadButton from "./ui/ButtonDownloadCV";
import blockConnection from "./ui/blockConnection";
import Block from "./ui/BlockConection";

type HeroProps = {
  title: string;
  imageSrc: string;
};

 const Hero = () => {
    return (
      <section className="px-6 md:px-20 py-8 bg-white">
        {/* Flex kiri-kanan */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-28">
          {/* Text Kiri */}
          <div className="text-center md:text-left">
            <p className="text-black text-lg mb-2">Hi Everyone 👋</p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#FFF019] mb-4">
              Radithia Arlistian Saputra
            </h1>
            <p className="text-gray-600 mb-14 leading-relaxed max-w-xl">
              A passionate Web Developer crafting clean, efficient, and creative
              solutions turning coffee into code, and ideas into reality. I specialize in building modern web applications
            </p>
            <DownloadButton />
          </div>
  
          {/* Gambar Kanan */}
          <div className="relative mt-5 md:mt-0">
            <div className="absolute -top-5 -left-5 w-[400px] h-[400px] md:w-[600px] md:h-[600px] z-0 translate-y-5">
              <Image
                src="/img/blob.svg"
                alt="Blob Background"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative z-10">
              <Image
                src="/img/FotoHome.png"
                alt="Radithia Arlistian Saputra"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
  
        {/* Block Pembatas */}
        <Block/>
      </section>
    );
  };
  export default Hero;