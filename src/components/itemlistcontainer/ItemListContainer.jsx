import { useState, useEffect } from "react";
import ListaProductos from "../db/ListaProductos";
import { db } from "../db/firebase";
import { createContext } from "react";
import { getDoc, getDocs, collection, query, where, getFirestore, doc } from "firebase/firestore";
// esto lo tengo que cambiar para firebase.
//aqui hice la captura de la api y se lo mando a ListaProductos por props.

export const ItemListContainerContext = createContext();

function ItemListContainer({children}) {
  const productRef = collection(db, "products")
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState();
  const [cart, setCart] = useState([]);
  const [totalCarrito, setTotalCarrito] = useState(0);


  // aqui seteo los productos y las categorias
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductos(data);
      })
      .catch((e) => console.error(e))
      .finally(() => setCargando(false));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.error(e));
  }, []);

const getProducts = async () => {
  const data = await getDocs(productRef)
  const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id} ))
  console.log(dataFiltrada)
  setProductos(dataFiltrada)
}

useEffect(() => {
  getProducts()
},[])

  const getCategories = async () => {
    const data = await getDocs(productsRefFilter)
    const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    console.log(dataFiltrada)
  }

  const productsRefFilter = query(
      collection(db, "products"),
      where("categoryId", "==", `${categorySelected}`)
  )

  useEffect(() => {
    getCategories()
  },[categorySelected])

  useEffect(() => {
    if (categorySelected) {
      fetch(`https://fakestoreapi.com/products/category/${categorySelected}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProductos(data);
        })
        .catch((e) => console.error(e))
        .finally(() => setCargando(false));
    }
    
  }, [categorySelected]);

  const getByCategory = (cat) => {
    setCategorySelected(cat);
    setCargando(true);
  };

  return (
    <div>
      <header>
        <div className="d-flex flex-row justify-content-center">
          <h1>Ecommerce - Cart: {cart.length}</h1>
        </div>

        <div className="d-flex flex-row justify-content-center mb-3">
          {categories?.map((cat) => (
            <button
              className="btn btn-outline-dark ms-3"
              key={cat}
              onClick={() => getByCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        {cargando ? (
          <p> Cargando productos...</p>
        ) : (
          // Mi map o componente con map de productos
          // estos son 3 props productos={productos} cart={cart} setCart={setCart} pasadon a ListaProductos
          // esta es la base de datos o la api a consumir
          // <ListaProductos productos={productos} cart={cart} setCart={setCart} />
         
          
          <ItemListContainerContext.Provider value={{productos, cart, setCart}}>
            <ListaProductos />
            {children}
          </ItemListContainerContext.Provider>
        )}
      </header>
    </div>
  );
}

export default ItemListContainer;
