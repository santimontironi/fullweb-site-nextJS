import Image from "next/image"
import Header from "../ui/Header"

const Home = () => {
  return (
    <>
      <Header/>
    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>


      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="text-center lg:text-left space-y-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              <span className="text-sm font-medium text-blue-300">Innovación en cada línea de código</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block text-white">Transformamos</span>
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text">
                  Ideas en Software
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
                Desarrollo de soluciones web personalizadas que impulsan tu negocio. Diseño moderno, código limpio y resultados excepcionales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600">
                Comenzar Proyecto
              </button>
              
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-slate-700/50 hover:border-slate-600">
                Ver Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700/50">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-slate-400">Proyectos</div>
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

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-150"></div>
              
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
    </>
  )
}

export default Home