import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbarcomp} from './components/Navbarcomp';
import {BrowserRouter as Router, Route, Routes, Link, Form} from "react-router-dom";
import { Inicio } from './pages/Inicio';
import { Empresa } from './pages/Empresa';
import { Catalogo } from './pages/Catalogo';

export default function App() {
  return (
    <div className="App"> 
        <Router>                
        <Navbarcomp/>  
          <Routes>
              <Route path='/inicio' element={<Inicio/>}/>
              <Route path='/empresa' element={<Empresa/>}/>
              <Route path='/catalogo' element={<Catalogo/>}/>
          </Routes>
        </Router> 
    </div>
  );
}
