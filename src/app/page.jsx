import About from "./components/landing/About"
import Services from "./components/landing/Services"
import Home from "./components/landing/Home"
import Contact from "./components/landing/Contact"

const page = () => {
  return (
    <>
      <section id="inicio">
        <Home/>
      </section>

      <section id="sobre-nosotros">
        <About/>
      </section>

      <section id="servicios">
        <Services/>
      </section>

      <section id="contacto">
        <Contact/>
      </section>
    </>
  )
}

export default page