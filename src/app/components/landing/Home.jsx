"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-size-[64px_64px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-center lg:text-left space-y-1 mt-10">

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block text-white">Transformamos</span>
                <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                  Ideas en Software
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Desarrollo de soluciones web personalizadas que impulsan tu negocio. Diseño moderno, código limpio y resultados excepcionales.
              </p>
            </div>

            <div className="flex flex-col mt-4 sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href='/#contacto' className="px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600">
                Comenzar Proyecto
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">Dev</div>
                <div className="text-sm text-slate-400">A medida</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-400">Satisfacción</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Soporte</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative">

              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-150"></div>

              <div className="relative w-96 h-96 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="FullWeb Logo"
                  width={400}
                  height={400}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <a className="z-50 underline-0" href="https://wa.me/+5493416459760?text=Hola%2C%20quiero%20más%20información">
        <div className="fixed bottom-5 right-5 xl:right-10 xl:bottom-10 xl:w-20 xl:h-20 w-12 h-12 flex items-center justify-center cursor-pointer transform transale-y-0 hover:-translate-y-2 transition-all duration-300">
          <img src="https://img.icons8.com/?size=100&id=DUEq8l5qTqBE&format=png&color=000000" alt="icon whatsapp" />
        </div>
      </a>
    </section>
  )
}

export default Home