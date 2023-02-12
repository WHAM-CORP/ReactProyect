import Logo from "../Logo/Logo"
import ArrayList from "../ArrayList/ArrayList"
import "./container.css"
import Carrito from "../Carrito/carrito"
const Container = () => {
    return <div className="containerHeader">
        <Logo src="../src/components/Imagenes/image.png" alt="holamundo" />
        <ArrayList>
        <ol className="menu">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Mision</li>
            <Carrito/>
        </ol>
        
        </ArrayList>
    </div>
}
export default Container;