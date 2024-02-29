import './button.css';

const button = ({ children, size = "20", size2 = "20" }) => (
  <button 
    className='button' 
    style={{ width: `${size}%`, height: `${size2}%` }} 
  >
    {children}
  </button>
);

export default button;
