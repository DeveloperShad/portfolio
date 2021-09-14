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
                    <div className="hero_item_5"><a href="https://masai-course.s3.ap-south-1.amazonaws.com/users/718/submissions/112398/265679/0eb63dddf32d4308641b453a94933cfa/resume.pdf" download>Resume <i className="fas fa-cloud-download-alt"></i></a></div>
                </div>
            </section>
    )
}

export default Hero
