import Carrito from "../Carrito/carrito";
import "./arrayList.css"
const ArrayList = () => {
    return <div className="menuContainer">
        <ol className="menu">
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Mision</li>
            <Carrito/>
        </ol>
    </div>;
}
export default ArrayList;