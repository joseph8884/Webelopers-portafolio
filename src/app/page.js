
import Nav from "./Components/nav"
export default function Home() {
  return (
    <body>
      <nav>
        <Nav />
      </nav>
      <header>
        <p>Esta es la parte de la oración</p>
      </header>
      <article>
        <p>Esto es la parte de quienes somos</p>
      </article>
      <section className="cartas_servicios">
        <p>cartas de servicios y que hacemos</p>
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
      <footer>
        <p>aca va el footer</p>
      </footer>
    </body>
  )
}
