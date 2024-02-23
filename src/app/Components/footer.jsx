import Image from "next/image";
import Link from 'next/link';
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="logo">
                    <Image
                    loading="lazy"
                    src="/HuevoFooter.svg" /* Ruta relativa al directorio public */
                    alt=""
                    width={300}
                    height={262} /* Puedes ajustar esto según tus necesidades */
                    />
                </div>
                <div className='links_footer'>
                    <Link href="#section1">Inicio</Link>
                    <Link href="#section2">Servicios</Link>
                    <Link href="#section3">Quienes Somos</Link>
                    <Link href="#section4">Proyectos</Link>
                    <Link href="#section5">Contactanos</Link>
                </div>
                <div className="cotizacion_footer">
                    <h3>¿Quieres trabajar con nosotros? 
                    Diligencia este formulario para conocernos mejor 
                    </h3>
                    <button>Cotiza con nosotros!</button>
                </div>
                <div className="derechosReservados">
                    <p>@2024 made by Webelopers. All rights reserved.</p>
                </div>
                <div className="redes">
                    <p>redes sociales</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;  