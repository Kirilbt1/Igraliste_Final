
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { Navigation } from './components/Routes/Routes';
// import Homepage from './components/HomePage/Homepage';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import About from './components/About/About';
// import Contact from './components/ContactUs/Contact';
// import ZsDaNe from './components/ZsDaNe/ZsDaNe';

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
import { ProductProvider } from "./components/Context/ProductContext";
import Header from "./components/Header/Header";
import GiftCard from "./components/GiftCards/GiftCard";

// import Favourites from './components/FavouritesPage/Favourites';
// import Faq from './components/Faq/Faq';
// import Login from './components/Login/Login';
// import RegisterOne from './components/RegisterOne/RegisterOne';
// import RegisterTwo from './components/RegisterTwo/RegisterTwo';
// import RegisterThree from './components/RegisterThree/RegisterThree';
// import GiftCard from './components/GiftCards/GiftCard';
// import EditForm from './components/EditForm/EditForm';
// import Profile from './components/Profile/Profile';
// import Product from './components/ProductPage/Product';
// import { ProductContext, ProductProvider } from './components/Context/ProductContext';



// function App() {




//   return (
//     <div className="App">

//       <Header />
//       <ProductProvider>
//       <Routes>

//           <Route path={Navigation.Homepage} element={<Homepage />}></Route>
//           <Route path={Navigation.Footer} element={<Footer />}></Route>
//           <Route path={Navigation.About} element={<About />}></Route>
//           <Route path={Navigation.Contact} element={<Contact />}></Route>
//           <Route path={Navigation.ZsDaNe} element={<ZsDaNe />}></Route>
//           <Route path={Navigation.Favourites} element={<Favourites />}></Route>
//           <Route path={Navigation.Faq} element={<Faq />}></Route>
//           <Route path={Navigation.Login} element={<Login />}></Route>
//           <Route path={Navigation.RegisterOne} element={<RegisterOne />}></Route>
//           <Route path={Navigation.RegisterTwo} element={<RegisterTwo />}></Route>
//           <Route path={Navigation.RegisterThree} element={<RegisterThree />}></Route>
//           <Route path={Navigation.GiftCards} element={<GiftCard />}></Route>
//           <Route path={Navigation.EditForm} element={<EditForm />}></Route>
//           <Route path={Navigation.Profile} element={<Profile />}></Route>
//           <Route path={Navigation.ProductPage} element={<Product />}></Route>



//       </Routes>
//       </ProductProvider>
//       {<Footer />}

//     </div>
//   );
// }

// export default App;


function App() {

  const location = useLocation();
  const login = location.pathname === "/Login";
  const registeOne = location.pathname === "/RegisterOne";
  const registerTwo = location.pathname === "/RehgisterTwo";
  const registerThree = location.pathname === "/RegisterThree";

  const HeaderAndFooter =
    !login &&
    !registeOne &&
    !registerTwo &&
    !registerThree;


  return (
    <div className="App">
       {HeaderAndFooter&&<Header/>}
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


        </Routes>
      </ProductProvider>
      {HeaderAndFooter && <Footer />}

    </div>
  );
}

export default App;

