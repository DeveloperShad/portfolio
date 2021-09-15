// div.item-$*4

import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import './home.css'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'


const Home = () => {
  
    return (
        <>
           <Navbar/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>

<footer>Created By <span>Anwar Shad</span>  |  2021 All rights reserved.</footer>
            
        </>
    )
}

export default Home
