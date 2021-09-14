
import React from 'react'

const Contact = () => {
    const init = {
        name:'',
        email:'',
        subject:'',
        message:''
    }
    const [FormData, setFormData] = React.useState(init)
    const {name,email,subject,message} = FormData

    const handleChange = (e)=>{
        const {name,value} = e.target;
       setFormData({...FormData,[name]:value})
    //    console.log(FormData)
    }

    const handleSubmit = async()=>{
        if(name && email && subject && message){
            const response = await fetch('https://myportfolio876-default-rtdb.firebaseio.com/contactForm.json',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,email,subject,message})
            })

            const data = await response.json()
            // console.log(data)
            alert('Thankyou for Submitting the form')
            setFormData(init)
            
        }
        else{
            alert('Please fill all the input field')
        }
        

        
    }

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
                        <h2>Contact</h2>
                        <div className="contact_subheading">
                            <span>&#8212;</span>
                            <h3>get in touch</h3>
                            <span> &#8212;</span>
                        </div>
                    </div>

                    <div className="contact_form_container">
                        <div className="contact_detail">
                            <div className="contact_detail_title">
                                <h4>Connect with Me</h4>
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
                                <h4>Message Me </h4>
                            </div>

                            <div className="form_input">
                                <div className="name">
                                    <input type="text" onChange={handleChange} value={name} name="name" id="" placeholder="Name" />
                                    <input type="email" onChange={handleChange} value={email} name="email" id="" placeholder="Email" />
                                </div>
                                <div className="subject">
                                    <input type="text" onChange={handleChange} value={subject} name="subject" id="" placeholder="Subject" />
                                </div>
                                <div className="message">
                                    <textarea onChange={handleChange} value={message} name="message" id="" cols="55" rows="3" placeholder="Message">
                                    </textarea>
                                </div>
                                <div className="submit_btn">
                                    <a onClick={handleSubmit} href="#Contact">Send Message</a>
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
