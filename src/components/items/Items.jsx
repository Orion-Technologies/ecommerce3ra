// import sttyles from './styles.module.css'
import { Link } from "react-router-dom";

const Items = ({ producto, cart, setCart }) => {
  const addToCart = () => {
    setCart([...cart, producto]);
  };

  return (
    <div className="container card mb-3" style={{ width: "350px" }}>
      <div>
        <img
          className="card-img-top"
          src={producto.image}
          alt={producto.title}
          style={{ width: "200px" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">ID:{producto.id}</h5>
        <h5 className="card-title">{producto.title}</h5>
        <h5>${producto.price}</h5>
        {/* <button className="btn btn-primary" onClick={addToCart}> */}
        {/* Agregar */}
        {/* </button> */}
        <Link to={`/item/${producto.id}`}> <button type="button" className="btn btn-outline-primary">Ver</button> </Link>
      </div>
    </div>
  );
};

export default Items;
