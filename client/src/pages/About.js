import React from 'react'
import NavbarComp from '../components/Navbar';
import LowerNav from '../components/LowerNav';
import Footer from '../components/Footer';


const About = () => {
  return (
    <>
        <NavbarComp />
        <LowerNav />
            <div>
                <h1>About Lancaster House</h1>
                <p>ABOUT: Lancaster House Publishing is a leader in providing thoroughly researched information on labour, employment, and human rights law. Our mandate is to serve the needs of employees, employers, professional organizations, unions, management, and labour and employment law practitioners.</p>
                <p>PUBLICATIONS and CONFERENCES: Lancaster’s leading-edge publications on workplace law, as well as our online legal research tool, First Resort™, are only part of the wide range of services that Lancaster provides, which include live conferences and interactive audio conferences across Canada. All of our conferences deal with current topics which pertain to the workplace and are led by recognized experts together with experienced labour and employment lawyers.</p>
                
            </div>
        <Footer />
    </>
  )
}

export default About