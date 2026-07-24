const ValuesCard = ({ icon, title, description, delay = 0 }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={delay}
            className="group relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 p-6"
        >
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300"></div>

            <div className="relative z-10">
                <div className="text-3xl xl:text-4xl mb-4">{icon}</div>
                <h4 className="text-base xl:text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ValuesCard
