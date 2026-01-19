import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[62px_62px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          <div className="space-y-4 flex justify-center items-center flex-col">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="FullWeb Logo"
                  width={40}
                  height={40}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                FullWeb
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transformamos ideas en software. Desarrollo web personalizado con diseño moderno y código limpio.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">Desarrollo Web</li>
              <li className="text-slate-400 text-sm">E-commerce</li>
              <li className="text-slate-400 text-sm">Aplicaciones Web</li>
              <li className="text-slate-400 text-sm">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 flex flex-col items-center text-sm">
              <li className="gap-2">
                <span className="text-blue-400 mt-0.5">📧</span>
                <a href="mailto:contacto@fullweb.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                  fullwebcontacto@gmail.com
                </a>
              </li>
              <li className="gap-2">
                <span className="text-cyan-400 mt-0.5">💬</span>
                <a href="tel:+5491112345678" className="text-slate-400 hover:text-blue-400 transition-colors">
                  +54 9 341 645 9760
                </a>
              </li>
              <li className="gap-2">
                <span className="text-purple-400 mt-0.5">📍</span>
                <span className="text-slate-400">
                  Santa Fe, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex justify-center items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} FullWeb. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer