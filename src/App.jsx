import React, { useEffect } from 'react'
import MainHome from './MainHome'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar1 from './Navbar1'
import Footer from './Footer'
import Services from './Pages/Services/Services'
import Pricing from './Pages/Pricing/Pricing'
import PortFolio from './Pages/PortFolio/PortFolio'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import JobApply from './Pages/JobApply'
import About from './Pages/About'
import Team from './Pages/Team'


function App() {
  // useEffect(() => {
  //   document.body.style.userSelect = "none";
  //   document.body.style.webkitUserSelect = "none";
  // }, []);
  return (
    <>
    <BrowserRouter>
    
    <Navbar1/>
    <Routes>
      <Route path='/' element={<MainHome/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/portfolio' element={<PortFolio/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/contact-us' element={<Contact/>}/>


      {/* About Us */}
      <Route path='/about-us' element={<About/>}/>
      <Route path='/team' element={<Team/>}/>

      {/* Career */}
      <Route path='/job-apply' element={<JobApply/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App