import Nav from "./Components/nav"
import Header from "./Components/header"
import Eggxcelentes from "./Components/eggxcelentes"
import Footer from "./Components/footer"
import Cards from "./Components/cards"
import Gio from "./Components/Gio"
import Portafolio from "./Components/Portafolio"

export default function Home() {
  return (
    <body>

      <Nav />
      <Header />

      <article>
        <p>Esto es la parte de quienes somos</p>
      </article>
      <section className="cartas_servicios">
        <Cards />
      </section>
      <Gio/>
      <section className="porta">
        <Portafolio/>
      </section>
      <section className="contacto">
        <p>formulario de contacto</p>
      </section>
      
      <Eggxcelentes/>
      <Footer />
    </body>
  )
}
