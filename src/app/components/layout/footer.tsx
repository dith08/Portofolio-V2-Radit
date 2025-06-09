import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <p className="text-gray-400">
              I designed and developed a professional portfolio website to
              showcase my work and skills effectively. The website features a
              modern, responsive design with smooth animations and intuitive
              navigation. It includes sections for project showcases, detailed
              case studies, and professional experience.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#portofolio"
                  className="text-gray-400 hover:text-white transition"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <Link
                  href="/education"
                  className="text-gray-400 hover:text-white transition"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/dith08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition group"
              >
                <div className="bg-gray-800 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50">
                  <Image
                    src="/img/GitHub.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                    className="transform transition-transform group-hover:rotate-12"
                  />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/raditya-saputra-24938a298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition group"
              >
                <div className="bg-gray-800 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50">
                  <Image
                    src="/img/Linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="transform transition-transform group-hover:rotate-12"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/rdthia_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition group"
              >
                <div className="bg-gray-800 p-2 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-500/50">
                  <Image
                    src="/img/Instagram.svg"
                    alt="Twitter"
                    width={24}
                    height={24}
                    className="transform transition-transform group-hover:rotate-12"
                  />
                </div>
              </a>
            </div>{" "}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Radithia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
