import Image from "next/image";
const Header = () => {
    return (
        <header>
            
                <Image 
                    loading="lazy" 
                    src="/fondoheader.svg" 
                    className="fondoheader" 
                    alt="" 
                    width={500}
                    height={300}
                />
                <div className="oracion">
                <div className="somosWebelopers">
                    <span className="font-semibold">Hola! Nosotros somos</span>
                    <br />
                    <br />
                    <span className="webelopers">
                        Webelopers
                    </span>
                    <h1 className="creatividad">
                        La creatividad <br></br>es nuestro código fuente
                    </h1>
                </div>
            </div>
            <div className="imagenLogo">
            <Image 
                    loading="lazy" 
                    src="/fondohuevo.png" 
                    alt="" 
                    width={500}
                    height={300}
                    className="fondohuevo"
                />
                <Image 
                    loading="lazy" 
                    src="/LogoWebelopers.png" 
                    alt="" 
                    width={500}
                    height={300}
                    className="logo"
                />
            </div>
        </header>

    )
}
export default Header;  