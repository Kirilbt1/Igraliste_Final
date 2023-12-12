

import { Route, Routes, useLocation } from "react-router-dom"
import Homepage from "./components/HomePage/Homepage";
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



// function App() {
const App: React.FC = () => {
  const location = useLocation();
  const login = location.pathname === "/Login";
  const registeOne = location.pathname === "/RegisterOne";
  const registerTwo = location.pathname === "/RegisterTwo";
  const registerThree = location.pathname === "/RegisterThree";
  const changePassword = location.pathname === "/change-password";
  const myProfile=location.pathname==="/myProfile";

  const HeaderAndFooter =
    !login &&
    !registeOne &&
    !registerTwo &&
    !registerThree &&
    !changePassword&&
    !myProfile;


  return (
    <div className="App">
      {HeaderAndFooter && <Header />}
      <ProductProvider>

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/RegisterOne" element={<RegisterOne />}></Route>
          <Route path="/RegisterTwo" element={<RegisterTwo />}></Route>
          <Route path="/RegisterThree" element={<RegisterThree />}></Route>
          <Route path="/Footer" element={<Footer />}></Route>
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











        </Routes>
      </ProductProvider>
      {HeaderAndFooter && <Footer />}

    </div>
  );

}

export default App;

