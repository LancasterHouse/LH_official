import React from 'react'
import NavbarComp from '../components/Navbar';
import LowerNav from '../components/LowerNav';
import JumbotronExample from '../components/Jumbotron';
import Footer from '../components/Footer';
import JumboCarousel from '../components/Carousel';
import PLP from '../components/ProfessionalLP';
import StudentAccess from '../components/StudentAccess';


const Landing = () => {
  return (
    <>
        <NavbarComp />
        <LowerNav />
        <JumboCarousel />
        <PLP />
        <StudentAccess />
        <Footer />
    </>
  )
}

export default Landing