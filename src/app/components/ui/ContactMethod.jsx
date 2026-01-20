const ContactMethod = ({ icon, title, url, description }) => {
  return (
    <div className="flex items-start gap-4">
      <a className="flex items-start gap-4" target="_blank" href={url}>
        <div className="w-12 h-12 flex items-center justify-center">
          <img src={icon} alt={`Icono de ${title}`} />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
          <p className="text-slate-400">{description}</p>
        </div>
      </a>
    </div>
  )
}

export default ContactMethod