import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import ItemDetail from "../itemdetail/ItemDetail"
//import { db } from "./firebase/client"
// import {
//   getDocs,
//   collection,
//   query,
//   where,
//   getDoc,
//   doc,
// } from "firebase/firestore";

//const productRef = doc(db, "O9kHG8SPJTaX8oM2Q1Yu");

function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {

        // const getProduct2 = () => {
        //   getDoc(productRef).then((snapshot) => {
        //     if (snapshot.exists()) {
        //       console.log(snapshot);
        //       console.log({ id: snapshot.id, ...snapshot.data() });
        //     }
        //   });
        // };

        const getProduct = async() => {
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            const filtredProduct = products.find(product => product.id === parseInt(id))
            setDetail(filtredProduct)
        }
       getProduct()
    }, [id])

    return(
        <ItemDetail detail={detail} />
    );
}
export default ItemDetailContainer