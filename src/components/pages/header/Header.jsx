import reciclar from '../../../../public/img/Simbolo3r.png';
import ayuda from '../../../../public/img/ayudar.png';
import carrito from '../../../../public/img/carrito.png';
import menu from '../../../../public/img/menu.png';
import notificacion from '../../../../public/img/notificacion.png';
import './header.css';


function Header() {
    return ( 
        <>
            <div className='Header'>
                <img width={"3%"}  src={reciclar} alt="icon" />
                <aside className='container-icons'>
                    <a href='#'><img width={"70%"}  src={ayuda} alt="icon" /></a>
                    <a href='#'><img width={"70%"}  src={notificacion} alt="icon" /></a>
                    <a href='#'><img width={"70%"}  src={carrito} alt="icon" /></a>
                    <a href='#'><img width={"70%"}  src={menu} alt="icon" /></a>
                </aside>
            </div>
        </>
     );
}

export default Header;