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
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/about' element={<div>About</div>} />
      <Route path='/jobs' element={<div>Join Our Team</div>} />
      <Route path='/aodapolicy' element={<div>AODA POLICY</div>} />
      <Route path='/legalNotices' element={<div>Legal Notices</div>} />
      <Route path='/refundPolicy' element={<div>REFUND POLICY</div>} />
      <Route path='/privacyPolicy' element={<div>Privacy Policy</div>} />
      <Route path='/termsAndConditions' element={<div>Terms and Conditions</div>} />

    </Routes>
      
      
      
    </BrowserRouter>

   
    
  );
}

export default App;


