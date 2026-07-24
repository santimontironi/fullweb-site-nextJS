import Link from "next/link"
import Image from "next/image"
import ContacFooter from "../ui/ContacFooter"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
]

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[62px_62px]"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-350 mx-auto px-4 md:px-6 xl:px-8 py-12 xl:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-12 mb-12 text-center md:text-left">

          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <span className="relative block w-10 h-10">
                <Image
                  src="/images/logo.png"
                  alt="FullWeb"
                  fill
                  sizes="40px"
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </span>
              <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                FullWeb
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed text-pretty">
              Transformamos ideas en software. Desarrollo web personalizado con diseño moderno y código limpio.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Desarrollo Web</li>
              <li>E-commerce</li>
              <li>Aplicaciones Web</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <ContacFooter
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fullwebcontacto@gmail.com"
                icon="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                label="fullwebcontacto@gmail.com"
              />

              <ContacFooter
                href="https://wa.me/+5493416459760?text=Hola%2C%20quiero%20más%20información"
                icon="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                label="+54 9 341 645 9760"
              />

              <ContacFooter
                href="https://www.instagram.com/fullweb_/"
                icon="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                label="fullweb_"
              />
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} FullWeb. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
