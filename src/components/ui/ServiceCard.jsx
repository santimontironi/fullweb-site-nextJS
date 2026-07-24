const ServiceCard = ({ icon, title, description, features, delay = 0 }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group relative flex flex-col h-full bg-slate-900 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 xl:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="text-4xl xl:text-5xl mb-4">{icon}</div>

        <h3 className="text-xl xl:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>

        <p className="text-sm xl:text-base text-slate-300 leading-relaxed mb-6">
          {description}
        </p>

        <ul className="mt-auto space-y-2 pt-4 border-t border-slate-800">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-r from-blue-400 to-cyan-400"></span>
              <span className="text-sm text-slate-400">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServiceCard
