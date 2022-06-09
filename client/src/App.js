import './App.css';
// import Header from './components/Header';
import NavbarComp from './components/Navbar';
import LowerNav from './components/LowerNav';
import JumbotronExample from './components/Jumbotron';
import Footer from './components/Footer';
import JumboCarousel from './components/Carousel';
// import Landing from './pages/Landing';

function App() {
  return (
    
    <>
      {/* <Header /> */}
      <NavbarComp />
      <LowerNav />
      {/* <JumbotronExample /> */}
      <JumboCarousel />
      <Footer />
      {/* <Landing /> */}
    </>
  );
}

export default App;
