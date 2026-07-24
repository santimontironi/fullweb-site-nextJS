const ContactMethod = ({ icon, title, url, description }) => {

  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800/60 border border-slate-700/50 transition-colors duration-300 group-hover:border-blue-500/50">
        <img
          src={icon}
          alt=""
          width={24}
          height={24}
          loading="lazy"
          className="h-6 w-6 object-contain"
        />
      </span>
      <div className="min-w-0">
        <h4 className="text-base xl:text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm xl:text-base text-slate-400 wrap-break-word">{description}</p>
      </div>
    </>
  )

  if (!url) {
    return (
      <div className="group flex items-center gap-4">
        {content}
      </div>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-xl transition-transform duration-300 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
    >
      {content}
    </a>
  )
}

export default ContactMethod
