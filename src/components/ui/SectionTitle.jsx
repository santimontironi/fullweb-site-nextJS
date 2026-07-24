const SectionTitle = ({ eyebrow, children }) => (
    <div className="flex flex-col items-center text-center mb-14 md:mb-16 xl:mb-20">
        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400">
            <span className="text-cyan-400">{"//"}</span> {eyebrow}
        </p>

        <h2 className="mt-4 md:mt-5 pb-1 text-3xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-balance bg-linear-to-b from-white to-slate-400 bg-clip-text text-transparent">
            {children}
        </h2>

        <span
            aria-hidden="true"
            className="mt-5 md:mt-6 block h-px w-20 bg-linear-to-r from-transparent via-cyan-400 to-transparent"
        ></span>
    </div>
)

export default SectionTitle
