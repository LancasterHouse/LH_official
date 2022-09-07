import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Header from './components/Header';
import NavbarComp from './components/Navbar';
import LowerNav from './components/LowerNav';
import JumbotronExample from './components/Jumbotron';
import Footer from './components/Footer';
import JumboCarousel from './components/Carousel';
import PLP from './components/ProfessionalLP';
import StudentAccess from './components/StudentAccess';
import Landing from './pages/Landing';
import Container from 'container/lib/container';

function App() {
  return (
    
    <>
      
      <Landing />
      
    </>

   
    
  );
}

export default App;


