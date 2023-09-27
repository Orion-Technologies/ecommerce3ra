import cart from "../../img/cart.png";
const Contador = ({ contador }) => {
  return <h3>{contador}</h3>;
};
const CartWidget = () => {
  return (
    <>
      <Contador contador={0} />
      <img src={cart} alt="Carrito de compras" height={50} />
    </>
  );
};

export default CartWidget;
