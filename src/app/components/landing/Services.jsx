"use client"

import ServiceCard from "../ui/ServiceCard"
import { motion } from "framer-motion"

const Services = () => {
  return (
    <section
      id="servicios"
      className="relative py-20 lg:py-32 overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[62px_62px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16 lg:mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold px-12 py-6 bg-linear-to-r from-[#0F172B] via-[#1e293b] to-[#0F172B] text-white rounded-2xl shadow-2xl">
              <span className="bg-linear-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
                Nuestros Servicios
              </span>
            </h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon="🌐"
            title="Desarrollo Web"
            description="Sitios web modernos, rápidos y responsivos construidos con las últimas tecnologías. Desde landing pages hasta aplicaciones web complejas."
            features={["Next.js & React", "Responsive Design", "SEO Optimizado"]}
          />

          <ServiceCard
            icon="💼"
            title="E-commerce"
            description="Tiendas online completas con sistemas de pago seguros, gestión de inventario y panel de administración personalizado."
            features={["Pasarelas de pago", "Gestión de productos", "Analytics integrado"]}
          />

          <ServiceCard
            icon="📱"
            title="Aplicaciones Web"
            description="Desarrollamos aplicaciones web progresivas (PWA) que funcionan como apps nativas en cualquier dispositivo."
            features={["Multiplataforma", "Notificaciones push", "Carga instantánea"]}
          />

          <ServiceCard
            icon="🎨"
            title="UI/UX Design"
            description="Diseños intuitivos y atractivos enfocados en la experiencia del usuario. Creamos interfaces que convierten visitantes en clientes."
            features={["Prototipos", "Design System", "User Testing"]}
          />

          <ServiceCard
            icon="⚙️"
            title="API Development"
            description="APIs RESTful escalables y seguras. Integraciones con servicios externos y microservicios."
            features={["REST", "Documentación", "Autenticación"]}
          />

          <ServiceCard
            icon="🔧"
            title="Mantenimiento"
            description="Soporte técnico continuo, actualizaciones de seguridad, optimización de rendimiento y nuevas funcionalidades."
            features={["Soporte 24/7", "Updates", "Backup automático"]}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Services