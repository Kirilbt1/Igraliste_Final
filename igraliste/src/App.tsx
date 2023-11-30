import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Routes/Routes';
import Homepage from './components/HomePage/Homepage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/ContactUs/Contact';
import ZsDaNe from './components/ZsDaNe/ZsDaNe';
import GiftCard from './components/GiftCard/GiftCard';
import Favourites from './components/FavouritesPage/Favourites';
import Faq from './components/Faq/Faq';
import Login from './components/Login/Login';

function App() {

  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path={Navigation.Homepage} element={<Homepage />}></Route>
        <Route path={Navigation.Footer} element={<Footer />}></Route>
        <Route path={Navigation.About} element={<About />}></Route>
        <Route path={Navigation.Contact} element={<Contact />}></Route>
        <Route path={Navigation.ZsDaNe} element={<ZsDaNe />}></Route>
        <Route path={Navigation.GiftCard} element={<GiftCard />}></Route>
        <Route path={Navigation.Favourites} element={<Favourites />}></Route>
        <Route path={Navigation.Faq} element={<Faq />}></Route>
        <Route path={Navigation.Login} element={<Login />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
