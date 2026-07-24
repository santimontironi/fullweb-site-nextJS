import About from "@/components/landing/About"
import Services from "@/components/landing/Services"
import Home from "@/components/landing/Home"
import Contact from "@/components/landing/Contact"

const page = () => {
  return (
    <>
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  )
}

export default page
