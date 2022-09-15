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
// import JumbotronExample from './components/Jumbotron';
import Footer from './components/Footer';
import JumboCarousel from './components/Carousel';
import PLP from './components/ProfessionalLP';
import StudentAccess from './components/StudentAccess';
import Container from 'container/lib/container';

//Pages
import Landing from './pages/Landing';
import About from './pages/About'
import Aodapolicy from './pages/AodaPolicy';
import LegalNotices from './pages/LegalNotices';
import Terms from './pages/Terms';
import Refund from './pages/RefundPolicy'
import Privacy from './pages/PrivacyPolicy'
import Careers from './pages/Careers'

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/about' element={<About />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/aodapolicy' element={<Aodapolicy />} />
      <Route path='/legalNotices' element={<LegalNotices />} />
      <Route path='/refundPolicy' element={<Refund />} />
      <Route path='/privacyPolicy' element={<Privacy />} />
      <Route path='/termsAndConditions' element={<Terms />} />



      {/* //error */}
      <Route path="*" element={<h1>Error</h1>} />
      

    </Routes>
      
      
      
    </BrowserRouter>

   
    
  );
}

export default App;


