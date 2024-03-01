import Link from "next/link";
import Image from "next/image";
const Cards = () => {
  return (
    <>
      <h1>
        Servicios <br />
        <b>What we do</b>
      </h1>
      <div className="cartas-container">
        <div className="carta">
          <div className="carta1-front">
            <Image
              loading="lazy"
              src="/CelularLogo.svg" /* Ruta relativa al directorio public */
              alt=""
              width={300}
              height={262} /* Puedes ajustar esto según tus necesidades */
            />
            <h2>Responsive design</h2>
          </div>
          <div className="back1">
            <p>dsad</p>
          </div>
        </div>
        <div className="carta">
          <div className="carta2-front">
            <Image
              loading="lazy"
              src="PortatilLogo.svg" /* Ruta relativa al directorio public */
              alt=""
              width={300}
              height={262} /* Puedes ajustar esto según tus necesidades */
            />
            <h2>Frontend developer</h2>
          </div>
          <div className="back2">
            <p>dsad</p>
          </div>
        </div>
        <div className="carta">
          <div className="carta3-front">
            <Image
              loading="lazy"
              src="Mundo.svg" /* Ruta relativa al directorio public */
              alt=""
              width={300}
              height={262} /* Puedes ajustar esto según tus necesidades */
            />
            <h2>International Quality</h2>
          </div>
          <div className="back3">
            <p>dsad</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
