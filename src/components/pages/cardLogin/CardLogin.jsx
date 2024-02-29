import TresR from '../../../../public/img/Simbolo3r.png';
import Button from '../../ui/button/Button';
import Input from '../../ui/input/Input';
import './cardLogin.css';

const card = () => (
  <div className="card">
    <img className='TresR' src={TresR} alt="Imagen de la tarjeta" />
    <div className='CardInput'>
    <Input type="text" placeholder="Usuario:" size="70"/>
    <Input type="password" placeholder="Contraseña:" size="70"/>
    </div>
    <Button size="70" size2="8">Login</Button>
    <p>Aun no tienes cuenta? Has Clic <a className='a' href="#">!Aqui¡</a></p>
  </div>
);

export default card;
