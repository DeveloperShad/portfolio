
import React from 'react'

import { useState } from 'react'

const Navbar = () => {
    const menu_right = ['Home', 'About', 'Skills', 'Projects', 'Contact']



    const [ShowMenu, setShowMenu] = useState(false)
    const [Toggle, setToggle] = useState(false)


    function handleClick() {
        setToggle(!Toggle)
        if(Toggle === false){
            setShowMenu(true)
        }
        else{
            setShowMenu(false)
        }

        
    }



    return (
        <>
            <section id="Home">
                <header>
                    <nav>
                        <div className="menu menu_left" id="menu_left">
                            <div id="logo"><h1>Anwar <span>Shad.</span></h1></div>
                        </div>
                        <div className="menu menu_right">
                            {
                                menu_right.map((el, index) => (
                                    <div key={index} className={`menu-item menu-item-${index++}`}> <a href={`#${el}`}>{el}</a></div>
                                ))
                            }

                        </div>
                    </nav>

                    <div className="mobile_menu_container">
                        <div className="mobile_menu_bar"  onClick={handleClick}>
                            {Toggle ? <i className="fas fa-times" onClick={handleClick}></i> : <i className="fas fa-bars" onClick={handleClick}></i>}
                        </div>
                        <div div className="mobile_menu">
                        {
                            ShowMenu ? <>
                                <a onClick={handleClick} href="#Home">Home</a>
                                <a onClick={handleClick} href="#About">About</a>
                                <a onClick={handleClick} href="#Skills">Skills</a>
                                <a onClick={handleClick} href="#Projects">Projects</a>
                                <a onClick={handleClick} href="#Contact">Contact</a>
                            </> : ""
                        }
                        </div>
                    </div>
                </header>
            </section>

        </>
    )
}

export default Navbar
