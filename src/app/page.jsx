import Nav from "./Components/nav";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Cards from "./Components/cards";
import Gio from "./Components/Gio";
import QuienesSomos from "./Components/quienesSomos";

export default function Home() {
  return (
    <body>
      <Nav />
      <Header />

      <article>
        <QuienesSomos />
      </article>
      <section className="cartas_servicios">
        <Cards />
      </section>
      <Gio />
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
  );
}
