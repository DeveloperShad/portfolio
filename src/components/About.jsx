
import React from 'react'

const About = () => {
    return (
        <>
             <section id="About">
                <div className="about">
                    <div className="heading">
                        <div><h2>About me</h2></div>
                        <div className="who_i_am">
                            <span>&#8212;</span>
                            <h3> Who am I </h3>
                            <span> &#8212;</span>
                        </div>
                    </div>
                    <div className="about_card">
                        <div className="image">
                            <img src="/profile-pic.jpg" alt="Profile" />
                        </div>
                        <div className="description">
                            <h2>I'm Anwar Shad and I'm a Full Stack <span>Web Developer</span></h2>
                            <p>In 2020 I have completed my graduation with B.Sc and decided to shape my career with coding skills. Now I am a MERN Stack Developer having strong knowledge of JavaScript and React. I love to convert ideas into reality with my coding skills. I am an excellent team player with great interpersonal skills. I want to associate with a reputed organization and looking to use and enhance my skills..
                                {/* <br />
                                I was a very techy guy from my childhood and I loved to solve different gadgets problems. That's why I got lots of appreciation from others which gave me more motivation towards this field.
                                But I did not pursue B.Tech due to family problems. Instead, I explored different tech stacks as a hobby And learned wordpress and worked for some clients as well.
                                Later on I realized I needed to learn coding so I came to know about Masai School and joined the full stack web development program. */}
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
