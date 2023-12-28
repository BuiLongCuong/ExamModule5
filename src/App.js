import ListProduct from "./pages/products/ListProduct";
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/products/ProductDetail";


function App() {
  return (
      <>
        <Routes>
          <Route path={'products'} element={<Home/>}>
            <Route path={"home"} element={<ListProduct/>}/>
            <Route path={"add"} element={<AddProduct/>}/>
            <Route path={"edit/:id"} element={<EditProduct/>}/>
            <Route path={"productDetail/:id"} element={<ProductDetail/>}/>
          </Route>
        </Routes>
      </>
  );
}

export default App;
