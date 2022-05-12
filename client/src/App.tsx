import React from 'react';
import './App.css';
import LoginPage from './components/loginPage/LoginPage';
import {Routes, Route} from 'react-router-dom'
import Main from './views/main/Main';

function App() {
  return (
   
    <div className="App">
        <h1 className='headline'>Miss <span className='manga'>Manga</span>Bookface</h1>
       <Routes>
           <Route path="/" element={<LoginPage/>} />
           <Route path='/main' element={<Main/>}/>
       </Routes>    
    </div>
   
  );
}

export default App;
