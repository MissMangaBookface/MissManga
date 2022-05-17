import React from 'react';
import './App.css';
import LoginPage from './components/loginPage/LoginPage';
import Routing from "./routing/Routing";

import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
   
    <div className="App">
        <h1 className='headline'>Miss <span className='manga'>Manga</span>Bookface</h1>
        <Routing>
        </Routing>
        <NavBar/>
        <Footer/>
    </div>
   
  );
}

export default App;
