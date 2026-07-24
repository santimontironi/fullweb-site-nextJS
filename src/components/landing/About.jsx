import ValuesCard from "../ui/ValuesCard"
import SectionTitle from "../ui/SectionTitle"
import Link from "next/link"

const About = () => {

  return (
    <section id="nosotros" className="relative py-20 md:py-24 xl:py-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[62px_62px]"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-350 mx-auto px-4 md:px-6 xl:px-8">
        <SectionTitle eyebrow="quiénes somos">Sobre Nosotros</SectionTitle>

        <div data-aos="fade-up" className="text-center mb-16 xl:mb-20">
          <p className="text-xl md:text-2xl xl:text-3xl font-bold text-balance mb-6">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Construimos el futuro, una línea de código a la vez
            </span>
          </p>

          <p className="text-base md:text-lg xl:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed text-pretty">
            Una agencia de desarrollo de software enfocada en transformar ideas en soluciones digitales bien pensadas, funcionales y orientadas a resultados.
          </p>
        </div>

        <div className="max-w-3xl xl:max-w-5xl mx-auto mb-16 xl:mb-20">
          <div className="grid gap-12 xl:grid-cols-2 xl:gap-16">

            <div data-aos="fade-up" className="relative pl-6 md:pl-8">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-cyan-400 via-blue-500 to-transparent"
              ></span>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">
                Nuestra Historia
              </h3>

              <p className="text-base xl:text-lg text-slate-400 leading-relaxed text-pretty">
                Comenzamos con una visión simple: crear software que realmente importa. No se trata solo de código bonito o interfaces llamativas, se trata de construir herramientas que resuelven problemas reales y generan impacto tangible en los negocios de nuestros clientes.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100" className="relative pl-6 md:pl-8">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 bottom-2 w-px bg-linear-to-b from-cyan-400 via-blue-500 to-transparent"
              ></span>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">
                Nuestra Filosofía
              </h3>

              <p className="text-base xl:text-lg text-slate-400 leading-relaxed text-pretty">
                Creemos en la transparencia total, la comunicación constante y el código limpio. Cada proyecto es una oportunidad para superar expectativas y cada cliente se convierte en un socio a largo plazo.
              </p>
            </div>

          </div>
        </div>

        <div>
          <div data-aos="fade-up">
            <SectionTitle eyebrow="cómo trabajamos">Nuestros Valores</SectionTitle>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <ValuesCard
              icon="🤝"
              title="Atención y compromiso"
              description="Comunicación clara, responsabilidad en cada etapa y un trato cercano con el cliente."
              delay={0}
            />

            <ValuesCard
              icon="🎯"
              title="Enfoque en resultados"
              description="Cada línea de código tiene un propósito claro: hacer crecer tu negocio."
              delay={100}
            />

            <ValuesCard
              icon="🧠"
              title="Soluciones inteligentes"
              description="Analizamos cada proyecto para construir soluciones eficientes y bien pensadas."
              delay={0}
            />

            <ValuesCard
              icon="🛠️"
              title="Soporte confiable"
              description="Acompañamiento técnico antes, durante y después de la entrega del proyecto."
              delay={100}
            />
          </div>
        </div>

        <div className="mt-16 xl:mt-20 text-center">
          <Link
            href="/#contacto"
            className="inline-block px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            Trabajemos Juntos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
