const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="group relative bg-slate-900 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 lg:p-8 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300"></div>
      
      <div className="relative z-10">
        <div className="text-5xl mb-4">{icon}</div>
        
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-300 leading-relaxed mb-6">
          {description}
        </p>

        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-sm text-slate-400">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard