const ContacFooter = ({ href, icon, label }) => (
  <li>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
    >
      <img
        src={icon}
        alt=""
        width={20}
        height={20}
        loading="lazy"
        className="w-5 h-5 shrink-0 object-contain"
      />
      <span className="wrap-break-word">{label}</span>
    </a>
  </li>
)

export default ContacFooter
