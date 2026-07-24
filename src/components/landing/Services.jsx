import ServiceCard from "../ui/ServiceCard"
import SectionTitle from "../ui/SectionTitle"

const Services = () => {

  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[62px_62px]"></div>

      <div className="relative z-10 max-w-7xl 2xl:max-w-350 mx-auto px-4 md:px-6 xl:px-8">
        <SectionTitle eyebrow="qué hacemos">Nuestros Servicios</SectionTitle>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard
            icon="🌐"
            title="Desarrollo Web"
            description="Sitios web modernos, rápidos y responsivos construidos con las últimas tecnologías. Desde landing pages hasta aplicaciones web complejas."
            features={["Next.js & React", "Responsive Design", "SEO Optimizado"]}
            delay={0}
          />

          <ServiceCard
            icon="💼"
            title="E-commerce"
            description="Tiendas online completas con sistemas de pago seguros, gestión de inventario y panel de administración personalizado."
            features={["Pasarelas de pago", "Gestión de productos", "Analytics integrado"]}
            delay={100}
          />

          <ServiceCard
            icon="📱"
            title="Aplicaciones Web"
            description="Desarrollamos aplicaciones web progresivas (PWA) que funcionan como apps nativas en cualquier dispositivo."
            features={["Multiplataforma", "Notificaciones push", "Carga instantánea"]}
            delay={200}
          />

          <ServiceCard
            icon="🎨"
            title="UI/UX Design"
            description="Diseños intuitivos y atractivos enfocados en la experiencia del usuario. Creamos interfaces que convierten visitantes en clientes."
            features={["Prototipos", "Design System", "User Testing"]}
            delay={0}
          />

          <ServiceCard
            icon="⚙️"
            title="API Development"
            description="APIs RESTful escalables y seguras. Integraciones con servicios externos y microservicios."
            features={["REST", "Documentación", "Autenticación"]}
            delay={100}
          />

          <ServiceCard
            icon="🔧"
            title="Mantenimiento"
            description="Soporte técnico continuo, actualizaciones de seguridad, optimización de rendimiento y nuevas funcionalidades."
            features={["Soporte 24/7", "Updates", "Backup automático"]}
            delay={200}
          />
        </div>
      </div>
    </section>
  )
}

export default Services
