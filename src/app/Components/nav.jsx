import Link from 'next/link';
const Nav = () => {
  return (
    <>
        <nav>
          <div className='nav'>
            <img className='logo' src="/LogoWebelopers.png" alt="Logo" />
            <div className='links_nav'>
              <Link href="#section1">Inicio</Link>
              <Link href="#section2">Servicios</Link>
              <Link href="#section3">Quienes Somos</Link>
              <Link href="#section4">Proyectos</Link>
              <Link href="#section5">Contactanos</Link>
            </div>
            <div className='Modo_nav'>
              <img className="sol" src="/solecito.png" alt="Modo Claro" />
              <img className="ingles" src="/Ingles.png" alt="English" />
            </div>
            <button>Cotiza ahora</button>
          </div>
        </nav>
    </>
  );
}
export default Nav;