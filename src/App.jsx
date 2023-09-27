import { CartContext } from "./components/context/cartContext";
import { ItemListContainerContext } from "./components/itemlistcontainer/ItemListContainer";
import Router from "./router/Router";

const App = () => {
  return <CartContext.Provider value={[]}>
    <Router />
  </CartContext.Provider>
 
};
export default App;
