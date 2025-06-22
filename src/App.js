// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import FicheArtisan from './pages/FicheArtisan';
import Categorie from './pages/Categorie';
import Vue_404 from './pages/Vue_404';
import Contact from "./pages/Contact";
import Accessibilite from "./pages/Accessibilite";
import Artisan_1 from "./pages/Artisan_1";
import Artisan_2 from "./pages/Artisan_2";
import Artisan_3 from "./pages/Artisan_3";
import Artisan_4 from "./pages/Artisan_4";
import Cookis from "./pages/Cookis";
import Mentionlegale from "./pages/Mentionlegale";
import Politique from "./pages/Politique"

function App() {
  return (
   
    <div className="App">
       
       {/* gestion des routes dans indexjs*/}
      <Routes>
      <Route path='/' element= {<Index/>}></Route>
      <Route path='/Categorie' element= {<Categorie/>}></Route>
      <Route path='/FicheArtisan' element= {<FicheArtisan/>}></Route>
      <Route path='/Vue_404' element= {<Vue_404/>}></Route>
      <Route path='/Contact' element= {<Contact/>}></Route>
      <Route path='/Accessibilite' element= {<Accessibilite/>}></Route>
      <Route path='/Artisan_1' element= {<Artisan_1/>}></Route>
      <Route path='/Artisan_2' element= {<Artisan_2/>}></Route>
      <Route path='/Artisan_3' element= {<Artisan_3/>}></Route>
      <Route path='/Artisan_4' element= {<Artisan_4/>}></Route>
      <Route path='/Cookis' element= {<Cookis/>}></Route>
      <Route path='/Mentionlegale' element= {<Mentionlegale/>}></Route>
      <Route path='/Politique' element= {<Politique/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
