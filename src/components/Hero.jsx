import React from 'react'

const Hero = () => {
    return (
        <section >
                <div className="hero">
                    <div className="hero_item_1">
                        <img src="/profile-pic.jpg" alt="Anwar Shad" />
                    </div>
                    <div className="hero_item_2">
                        <p>Hello, My name is</p>

                    </div>
                    <div className="hero_item_3">
                        <h2>Anwar Shad</h2>
                    </div>
                    <div className="hero_item_4">
                        <p>And I'm a Full Stack <span>Web Developer</span></p>
                    </div>
                    <div className="hero_item_5"><a href="https://drive.google.com/file/d/1m3_aT-Zf7Cw6_qQFaxJ_ZBKbzVZbDzBT/view?usp=sharing" target="_blank" download>Resume <i className="fas fa-cloud-download-alt"></i></a></div>
                </div>
            </section>
    )
}

export default Hero
