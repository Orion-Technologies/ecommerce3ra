import NavBar from "../components/navbar/NavBar";
import ItemListContainer from "../components/itemlistcontainer/ItemListContainer";
import ItemDetailContainer from "../components/itemdetailcontainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
