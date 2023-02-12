import Logo from "../Logo/Logo"
import ArrayList from "../ArrayList/ArrayList"
import "./container.css"


const Container = () => {
    return <div className="containerHeader">
        <Logo src="../src/components/Imagenes/image.png" alt="holamundo" />
        <ArrayList />
    </div>
}
export default Container;