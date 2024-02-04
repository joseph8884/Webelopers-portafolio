

import Nav from "./Components/nav"
import Header from "./Components/header"
import Footer from "./Components/footer"
import Cards from "./Components/cards"
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
      <section className="quienes_somos_carrusel">
        <p>Quienes somos, animacion entre carrusel</p>
      </section>
      <main>
        <p>portafolio de nuestros proyectos</p>
      </main>
      <section className="contacto">
        <p>formulario de contacto</p>
      </section>
      <section className="Eggxcelentes">
        <p>Egg-selentes, frase</p>
      </section>
      <Footer />
    </body>
  )
}
