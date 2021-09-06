// div.item-$*4
import React, { useEffect, useState } from 'react'
import About from './About'
import Contact from './Contact'
import './home.css'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
    const menu_right = ['Home', 'About', 'Skills', 'Projects', 'Contact']
   

    const [Width, ] = useState(window.innerWidth)
    const [State, setState] = useState(true)
    const [Toggle, setToggle] = useState(false)
   
    useEffect(() => {
        
        function handleResize() {
           
        }
        handleClick()
    
        window.addEventListener('resize',handleResize)
    }, )


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


            <section >
                <div className="hero">
                    <div className="hero_item_1">
                        <img src="/profile-pic.jpg" alt="Anwar Shad" />
                    </div>
                    <div className="hero_item_2">
                        <p>Hello, my name is</p>

                    </div>
                    <div className="hero_item_3">
                        <h2>Anwar Shad</h2>
                    </div>
                    <div className="hero_item_4">
                        <p>And I'm a Full Stack <span>Web Developer</span></p>
                    </div>
                    <div className="hero_item_5"><a href="https://masai-course.s3.ap-south-1.amazonaws.com/users/718/submissions/112398/265679/0eb63dddf32d4308641b453a94933cfa/final%20resume.pdf" download>Resume <i className="fas fa-cloud-download-alt"></i></a></div>
                </div>
            </section>

            <About/>

            <Skills/>

            <Projects/>

            <Contact/>

           


            


<footer>Created By <span>Anwar Shad</span>  |  2021 All rights reserved.</footer>
            


           
        </>
    )
}

export default Home
