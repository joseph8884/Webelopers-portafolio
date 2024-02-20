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
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front1">
              <Image
                loading="lazy"
                src="/CelularLogo.svg" /* Ruta relativa al directorio public */
                alt=""
                width={300}
                height={262} /* Puedes ajustar esto según tus necesidades */
              />
              <h2>Responsive design</h2>
            </div>
            <div class="flip-card-back1">
              <h1>Back</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front2">
              <Image
                loading="lazy"
                src="PortatilLogo.svg" /* Ruta relativa al directorio public */
                alt=""
                width={300}
                height={262} /* Puedes ajustar esto según tus necesidades */
              />
              <h2>Frontend developer</h2>
            </div>
            <div class="flip-card-back2">
              <h1>Back</h1>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front3">
              <Image
                loading="lazy"
                src="Mundo.svg" /* Ruta relativa al directorio public*/ 
                alt=""
                width={300}
                height={262} /* Puedes ajustar esto según tus necesidades */
              />
              <h2>International Quality</h2>
            </div>
            <div class="flip-card-back3">
              <h1>Back</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
