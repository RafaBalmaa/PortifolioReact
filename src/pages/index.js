import React, {useState} from 'react'
import Hero from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Tec from '../components/Technologies'

const Home = () => {
   const [isOpen, setIsOpen] = useState(false)
   const toggle =() => {
      setIsOpen(!isOpen)
   }

   return (
      <div>
         <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar toggle={toggle}/>
         <Hero />
         <InfoSection {...homeObjOne} />
         <InfoSection {...homeObjTwo} />
         <Services />
         <InfoSection {...homeObjThree} />
         <Tec />
         <Footer />
      </div>
   )
}

export default Home
