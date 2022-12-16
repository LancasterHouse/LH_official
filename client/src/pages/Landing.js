import React from 'react'
import NavbarComp from '../components/Navbar';
import LowerNav from '../components/LowerNav';
import JumbotronExample from '../components/Jumbotron';
import Footer from '../components/Footer';
import JumboCarousel from '../components/Carousel';
import PLP from '../components/ProfessionalLP';
import StudentAccess from '../components/StudentAccess';
import Upcoming from '../components/Upcoming';

const Landing = () => {
  return (
    <>
        <NavbarComp />
        <LowerNav />
        <JumboCarousel />
        <Upcoming />
        <PLP />
        <StudentAccess />
        <Footer />
    </>
  )
}

export default Landing