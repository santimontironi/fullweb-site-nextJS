"use client"

import ValuesCard from "../ui/ValuesCard"
import Link from "next/link"
import { motion } from "framer-motion"

const About = () => {

  return (
    <section
      id="nosotros"
      className="relative py-20 lg:py-32 overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[62px_62px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-white mb-2">Construimos el futuro</span>
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
              Una línea de código a la vez
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Una agencia de desarrollo de software enfocada en transformar ideas en soluciones digitales bien pensadas, funcionales y orientadas a resultados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 p-8 lg:p-10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="absolute -left-8 lg:-left-10 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500 via-cyan-500 to-transparent rounded-full"></div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Nuestra Historia</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Comenzamos con una visión simple: crear software que realmente importa. No se trata solo de código bonito o interfaces llamativas, se trata de construir herramientas que resuelven problemas reales y generan impacto tangible en los negocios de nuestros clientes.
                  </p>
                </div>

                <div className="w-full border-t-5 border-slate-700/80"></div>

                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Nuestra Filosofía</h3>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    Creemos en la transparencia total, la comunicación constante y el código limpio. Cada proyecto es una oportunidad para superar expectativas y cada cliente se convierte en un socio a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Nuestros Valores</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValuesCard
              icon="🤝"
              title="Atención y compromiso"
              description="Comunicación clara, responsabilidad en cada etapa y un trato cercano con el cliente."
            />
            <ValuesCard
              icon="🎯"
              title="Enfoque en resultados"
              description="Cada línea de código tiene un propósito claro: hacer crecer tu negocio."
            />
            <ValuesCard
              icon="🧠"
              title="Soluciones inteligentes"
              description="Analizamos cada proyecto para construir soluciones eficientes y bien pensadas."
            />
            <ValuesCard
              icon="🛠️"
              title="Soporte confiable"
              description="Acompañamiento técnico antes, durante y después de la entrega del proyecto."
            />
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <Link href="/#contacto" className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105">
            Trabajemos Juntos
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default About