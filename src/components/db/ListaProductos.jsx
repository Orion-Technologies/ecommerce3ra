import Items from "../items/Items";
import { useContext } from "react";
import { ItemListContainerContext } from "../itemlistcontainer/ItemListContainer";
// ListaProductos le esta mandondo las props a Items por props
const ListaProductos = () => {
  const {productos, cart, setCart} = useContext(ItemListContainerContext)
  return (
    <>
      <h4>Productos</h4>
      <div className="container">
        <div className="row">
          {productos?.map((prod) => (
            <Items
              producto={prod}
              key={prod.id}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ListaProductos;
