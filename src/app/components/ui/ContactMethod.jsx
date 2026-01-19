const ContactMethod = ({ icon, title, description, bgColor, borderColor }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  )
}

export default ContactMethod