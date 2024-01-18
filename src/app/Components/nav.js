import Link from 'next/link';
const Nav = () => {
  return (
    <div>
        <nav>
            <img src="/LogoWebelopers.png" alt="Logo" />
            <Link href="#section1">Inicio</Link>
            <Link href="#section2">Servicios</Link>
            <Link href="#section3">Quienes Somos</Link>
            <Link href="#section4">Proyectos</Link>
            <Link href="#section5">Contactanos</Link>
            <img className="sol" src="/solecito.png" alt="Modo Claro" />
            <img className="ingles" src="/Ingles.png" alt="English" />
            <button>Cotiza ahora</button>
        </nav>
    </div>
  );
}
export default Nav;