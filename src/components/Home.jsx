// div.item-$*4
import React, { useRef, useState } from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import './home.css'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
    const menu_right = ['Home', 'About', 'Skills', 'Projects', 'Contact']
   

    let  Width = useRef(window.innerWidth)
    Width = Width.current
    const [State, setState] = useState(true)
    const [Toggle, setToggle] = useState(true)
   
    
       
        window.addEventListener('resize',function(){
           
           
           
        })
   


    function handleClick (){
        setState(!State)

        if(State && Width < 600){
            setToggle(true)
        }
        else if(!State && Width < 600){
            setToggle(false)
        }
    }
  

   
    return (
        <>
            <header >
               {/* <h1>Shadddd :{Width}</h1> */}
                <nav>
                    <div className="menu menu_left" id="menu_left">
                        <div id="logo"><a href="#logo"><h1>Anwar <span>Shad.</span></h1></a></div>
                    </div>
                    <div className="menu menu_right">
                        {
                            menu_right.map((el, index) => (
                                <div key={index} className={`menu-item menu-item-${index++}`}> <a href={`#${el}`}>{el}</a></div>
                            ))
                        }

                    </div>
                    <span id="span" onClick={handleClick}>{Toggle? <i className="fas fa-bars"></i>: !Toggle ? <i className="fas fa-times"></i>:null}  {!Toggle ? 
                    <div id="hamburger">
                        {
                            menu_right.map((el,i)=>(
                                <div key={i}> <a href={`#${el}`}>{el}</a></div>
                            ))
                        }
                    </div>:''}</span>
                </nav>
                
            </header>


           
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
