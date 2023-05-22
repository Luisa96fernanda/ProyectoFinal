import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbarcomp} from './components/Navbarcomp';
import {BrowserRouter as Router, Route, Routes, Link, Form} from "react-router-dom";
import { Inicio } from './pages/Inicio';
import { Empresa } from './pages/Empresa';
import { Catalogo } from './pages/Catalogo';
import { Pdf } from './pages/Pdf';
import { Footer } from './components/Footer';
import { Pdf2 } from './pages/Pdf2';


export default function App() {
  return (
    <div className="App"> 
        <Router>                
        <Navbarcomp/>  
          <Routes>
              <Route path='/inicio' element={<Inicio/>}/>
              <Route path='/empresa' element={<Empresa/>}/>
              <Route path='/catalogo' element={<Catalogo/>}/>
              <Route exact path='/catalogo' Component={Catalogo}/>
              <Route exact path='/pdf' Component={Pdf}/>
              <Route exact path='/pdf2' Component={Pdf2}/>
          </Routes>
          <Footer/>
        </Router> 
    </div>
  );
}
