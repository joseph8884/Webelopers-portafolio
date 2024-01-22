import Image from "next/image";
import Link from 'next/link';
const Footer = () => {
    return (
        <>
            <Image 
                loading="lazy" 
                src="fondofooter.svg" 
                className="fondoFooter" 
                alt="" 
                width={100}
                height={200}
            />
            <div className="footer">
                <div className='links_footer'>
                <Link href="#section1">Inicio</Link>
                <Link href="#section2">Servicios</Link>
                <Link href="#section3">Quienes Somos</Link>
                <Link href="#section4">Proyectos</Link>
                <Link href="#section5">Contactanos</Link>
                </div>
                <div className="derechosReservados">
                    <p>@2023  Egresados La fuente Tocancipa. All rights reserved.</p>
                </div>
                <div>
                    <p>redes sociales</p>
                </div>
            </div>
        </>
    )
}
export default Footer;  