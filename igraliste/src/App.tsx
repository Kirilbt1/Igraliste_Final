

import { Route, Routes, useLocation } from "react-router-dom"
import Homepage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import RegisterOne from "./components/RegisterOne/RegisterOne";
import RegisterTwo from "./components/RegisterTwo/RegisterTwo";
import RegisterThree from "./components/RegisterThree/RegisterThree";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/ContactUs/Contact";
import ZsDaNe from "./components/ZsDaNe/ZsDaNe";
import Favourites from "./components/FavouritesPage/Favourites";
import Faq from "./components/Faq/Faq";

import Header from "./components/Header/Header";
import GiftCard from "./components/GiftCards/GiftCard";
import { ProductProvider } from "./components/Context/ProductContext";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import MyProfile from "./components/MyProfile/MyProfile";
import Order from "./components/OrderPage/Order";
import FormToOrder from "./components/FormToOrder/FormToOrder";



// function App() {
const App: React.FC = () => {
  const location = useLocation();
  const login = location.pathname === "/Login";
  const registeOne = location.pathname === "/RegisterOne";
  const registerTwo = location.pathname === "/RegisterTwo";
  const registerThree = location.pathname === "/registerThree";
  const changePassword = location.pathname === "/change-password";
  const myProfile=location.pathname==="/myProfile";
const formOrder=location.pathname==="/form-to-order"
  const HeaderAndFooter =
    !login &&
    !registeOne &&
    !registerTwo &&
    !registerThree &&
    !changePassword&&
    !myProfile&&
    !formOrder;


  return (
    <div className="App">
      {HeaderAndFooter && <Header />}
      <ProductProvider>

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/RegisterOne" element={<RegisterOne />}></Route>
          <Route path="/RegisterTwo" element={<RegisterTwo />}></Route>
          <Route path="/registerThree" element={<RegisterThree />}></Route>

          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Zsdane" element={<ZsDaNe />}></Route>
          <Route path="/Favourites" element={<Favourites />}></Route>
          <Route path="/Faq" element={<Faq />}></Route>
          <Route path="/GiftCard" element={<GiftCard />}></Route>
          <Route path="/product-list" element={<ProductList itemsPerPage={12} />}></Route>
          <Route path="/product-details/:productId" element={<ProductDetails />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/myProfile" element={<MyProfile/>} />
          <Route path="/Order" element={<Order/>} />
          <Route path="/form-to-order" element={<FormToOrder/>} />













        </Routes>
      </ProductProvider>
      {HeaderAndFooter && <Footer />}

    </div>
  );

}

export default App;

