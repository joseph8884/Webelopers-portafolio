import PortafolioItem from "./PortafolioItem";

const Portafolio = () => {
  return (
    <section className="portafolioSection">
      <h1>
        Portafolio<br />
        <b>Nuestros proyectos</b>
      </h1>
      <div className="portafolioFilter">
        <button className="filterItem">All</button>
        <button className="filterItem">Web Application</button>
        <button className="filterItem">Crud</button>
        <button className="filterItem">Design</button>
        <button className="filterItem">Robotic</button>
      </div>
      <div className="portafolioItems">
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-1.png"      
          altText="imagen"
          projectName="Portafolio Webelopers - Segunda Versión"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-2.png"
          altText="Portafolio Item 2"
          projectName="Colegio La Fuente"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-3.png"
          altText="Portafolio Item 3"
          projectName="Sport Bar Panda FC"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-4.png"      
          altText="imagen"
          projectName="Retos Javascript"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-5.png"
          altText="Portafolio Item 2"
          projectName="Pokedex Api"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-6.png"
          altText="Portafolio Item 3"
          projectName="Crónometro"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-7.png"      
          altText="imagen"
          projectName="Juego Tetris"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-8.png"
          altText="Portafolio Item 2"
          projectName="CRUD MercaTodo"
        />
        <PortafolioItem
          imageSrc="/portfolio/thumb/project-9.png"
          altText="Portafolio Item 3"
          projectName="Portafolio Item 3"
        />
      </div>
    </section>
  );
};

export default Portafolio;
