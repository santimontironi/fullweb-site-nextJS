"use client"

import ContactMethod from "../ui/ContactMethod"
import { useForm } from "react-hook-form"
import { sendMessageAxios } from "@/service/contactService"
import Swal from "sweetalert2"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Contact = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
      offset: 100
    })
  }, [])

  async function formSubmit(data) {
    Swal.fire({
      title: 'Enviando mensaje',
      html: '<div class="animate-pulse">Procesando tu solicitud...</div>',
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
      background: '#1e293b',
      color: '#fff',
      customClass: {
        popup: 'rounded-2xl border border-slate-700',
        title: 'text-2xl font-bold',
        htmlContainer: 'text-slate-300'
      }
    })
    try {
      await sendMessageAxios(data)
      Swal.fire({
        title: '¡Mensaje enviado!',
        html: '<p class="text-lg">Te responderemos en menos de 24 horas 🚀</p>',
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'Perfecto',
        timer: 3000,
        timerProgressBar: true,
        background: '#1e293b',
        color: '#fff',
        iconColor: '#22c55e',
        confirmButtonColor: '#3b82f6',
        customClass: {
          popup: 'rounded-2xl border border-slate-700 shadow-2xl',
          title: 'text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent',
          htmlContainer: 'text-slate-300',
          confirmButton: 'rounded-lg px-6 py-3 font-semibold hover:scale-105 transition-transform',
          timerProgressBar: 'bg-gradient-to-r from-blue-500 to-cyan-500'
        }
      })
      reset()
    }
    catch (error) {
      Swal.fire({
        title: '¡Ups! Algo salió mal',
        html: '<p class="text-lg">No pudimos enviar tu mensaje. Por favor, intenta nuevamente.</p>',
        icon: 'error',
        showConfirmButton: true,
        confirmButtonText: 'Reintentar',
        background: '#1e293b',
        color: '#fff',
        iconColor: '#ef4444',
        confirmButtonColor: '#3b82f6',
        customClass: {
          popup: 'rounded-2xl border border-slate-700 shadow-2xl',
          title: 'text-2xl font-bold',
          htmlContainer: 'text-slate-300',
          confirmButton: 'rounded-lg px-6 py-3 font-semibold hover:scale-105 transition-transform'
        }
      })
      if (error.response?.data?.message) {
        console.log(error.response.data.message)
      }
    }
  }

  return (
    <section
      id="contacto"
      className="relative py-20 lg:py-32 overflow-hidden bg-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-size-[62px_62px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16 lg:mb-20">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
            <h2 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold px-12 py-6 bg-linear-to-r from-[#0F172B] via-[#1e293b] to-[#0F172B] text-white rounded-2xl shadow-2xl">
              <span className="bg-linear-to-r from-white via-blue-100 to-white text-transparent bg-clip-text">
                Hablemos de tu proyecto
              </span>
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="100" className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                ¿Listo para transformar tu idea en realidad?
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Estamos aquí para escucharte y ayudarte a construir la solución perfecta para tu negocio. Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              <ContactMethod
                icon="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
                url="https://mail.google.com/mail/?view=cm&fs=1&to=fullwebcontacto@gmail.com"
                title="Email"
                description="fullwebcontacto@gmail.com"
              />

              <ContactMethod
                url="https://wa.me/+5493416459760?text=Hola%2C%20quiero%20más%20información"
                icon="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                title="WhatsApp"
                description="+54 9 341 645 9760"
              />

              <ContactMethod
                url="https://www.instagram.com/fullweb_/"
                icon="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
                title="Instagram"
                description="fullweb_"
              />

              <ContactMethod
                icon="https://img.icons8.com/?size=100&id=uzeKRJIGwbBY&format=png&color=000000"
                title="Ubicación"
                description="Santa Fe, Argentina"
              />
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 p-8 lg:p-10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5"></div>

              <form className="relative z-10 space-y-6" onSubmit={handleSubmit(formSubmit)}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Ingresa tu nombre"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    {...register('name', { required: true })}
                  />
                  {errors.name && <span className="text-red-500 text-sm">El nombre es requerido</span>}
                </div>

                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-slate-300 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="surname"
                    placeholder="Ingresa tu apellido"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    {...register('surname', { required: true })}
                  />
                  {errors.surname && <span className="text-red-500 text-sm">El apellido es requerido</span>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu correo electrônico"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className="text-red-500 text-sm">El correo electrónico es requerido</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Ingresa tu teléfono"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && <span className="text-red-500 text-sm">El teléfono es requerido</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Describe tu proyecto, necesidades y presupuesto estimado..."
                    {...register('message', { required: true })}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-sm">El mensaje es requerido</span>}
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 cursor-pointer"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact