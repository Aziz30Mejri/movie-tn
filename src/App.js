import React from'react';
import './App.css';
import Header from './components/Header';
import Accueil from './components/Pages/Accueil/Accueil';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Series from './components/Pages/Series/Series';
import Films from './components/Pages/Films/Films';
import Footer from './components/Footer';
import Contact from './components/Pages/Contact/Contact';


function App() {
    return(
      <Router>
      
        <Header/>
        
        <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/films' element={<Films/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>

        <Footer/>

      </Router>
    );
}

export default App;

