import './card.css'
import Button from '../button/Button'

// eslint-disable-next-line react/prop-types
const Card = ({textName, descripcion, size = "10", size2 = "10", image}) => (

        <>
            <div className='Card' style={{width: `${size}%`, height: `${size2}%`}}>
                <img className='img-card' src={image}/>
                <div className='text'>
                    <h2>Nombre: {textName}</h2>
                    <h2>Descripción:</h2>
                    <p>{descripcion}</p>
                    <Button size="40" size2="18">Apartar</Button>
                </div>
            </div>
        </>
);

export default Card;