// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Luciano_Home from './pages/Luciano_Home';
import Luciano_Contact from './pages/Luciano_Contact';
import Luciano_Mentions_legal1 from './pages/Luciano_Mentions_legal1';
import Luciano_portfolio from './pages/Luciano_portfolio';
import Luciano_Services from './pages/Luciano_Services';

// function h() {
//   console.log("Button Clicked");
// }



function App() {
  return (
   
    <div className="App">
      <nav  className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className="container-fluid">
      <a className="navbar-brand" href="#">JOHN DOE</a>
      <div className="navBar">
      <button className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
    <div className="navbar-nav">
      <a href='/' className='nav-link active card-text' aria-current="page">Home</a>
      <a href='/Luciano_Services ' className='nav-link active card-text'>Services</a>
      <a href='/Luciano_Portfolio' className='nav-link active card-text'>Portfolio</a>
      <a href='/Luciano_Contact' className='nav-link active card-text'>Contact</a>
      <a href='Luciano_mentions_legal1' className='nav-link active card-text'>Mention legales</a>
      </div>
      </div>
      </div>
      </div>
      </nav>
     
      <Routes>
      <Route path='/' element= {<Luciano_Home/>}></Route>
      <Route path='/Luciano_Contact' element= {<Luciano_Contact/>}></Route>
      <Route path='/Luciano_Mentions_legal1' element= {<Luciano_Mentions_legal1/>}></Route>
      <Route path='/Luciano_Portfolio' element= {<Luciano_portfolio/>}></Route>
      <Route path='/Luciano_Services' element= {<Luciano_Services/>}></Route>
      </Routes>
      {/* <button className="btn fw-bold" onClick={() => h()}>En Savoir Plus</button> */}
    </div>
  );
}

export default App;
