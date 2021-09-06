
import React from 'react'

const Contact = () => {

    const social_media = [
        {
            icon: "fab fa-github",
            title: 'DeveloperShad',
            link: 'https://github.com/developershad'
        },
        {
            icon: "fab fa-linkedin",
            title: 'DeveloperShad',
            link: 'https://www.linkedin.com/in/developershad/'
        },
        {
            icon: "fas fa-envelope",
            title: 'theanwarshad@gmail.com',
            link: 'theanwarshad876@gmail.com'
        },
        {
            icon: "fas fa-mobile-alt",
            title: '9572329327',
            link: 9572329327
        },
    ]
    return (
        <>
            
            <section id="Contact">
                <div className="contact">
                    <div className="contact_heading">
                        <h2>Contact me</h2>
                        <div className="contact_subheading">
                            <span>&#8212;</span>
                            <h3>get in touch</h3>
                            <span> &#8212;</span>
                        </div>
                    </div>

                    <div className="contact_form_container">
                        <div className="contact_detail">
                            <div className="contact_detail_title">
                                <h4>Connect me</h4>
                            </div>

                            <div className="social_media">
                                {
                                    social_media.map(({ icon, title, link }, index) => (
                                        <div className="social_icon" key={index}>
                                            <a href={link} target="_blank" rel="noreferrer"><i className={icon}></i></a>
                                            {/* <a href={link} target="_blank">{title} :</a> */}
                                            <a href={link} target="_blank" rel="noreferrer">{title}</a>
                                          
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="form">
                            <div className="form_title">
                                <h4>Message me </h4>
                            </div>

                            <div className="form_input">
                                <div className="name">
                                    <input type="text" name="" id="" placeholder="Name" />
                                    <input type="email" name="" id="" placeholder="Email" />
                                </div>
                                <div className="subject">
                                    <input type="text" name="" id="" placeholder="Subject" />
                                </div>
                                <div className="message">
                                    <textarea name="" id="" cols="55" rows="3" placeholder="Message">
                                    </textarea>
                                </div>
                                <div className="submit_btn">
                                    <a href="alid.md">Send Message</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
