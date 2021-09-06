
import React from 'react'

const Skills = () => {

    const skill = [
        {
            title: 'JAVASCRIPT',
            url: "fab fa-js"
        },
        {
            title: 'HTML',
            url: 'fab fa-html5'
        },
        {
            title: 'CSS',
            url: "fab fa-css3-alt"
        },
        {
            title: 'HTML5',
            url: 'fab fa-html5'
        },
        {
            title: 'CSS3',
            url: "fab fa-css3-alt"
        },
        {
            title: 'REACT JS',
            url: "fab fa-react"
        },
        {
            title: 'NODE JS',
            url: "fab fa-node-js"
        },
        {
            title: 'GITHUB',
            url: "fab fa-github"
        }
    ]


    return (
        <>
            <section id="Skills">
                <div className="skill_container">
                    <div className="skill_heading">
                        <h2>Skills & Tools</h2>
                        <div className="what_i_know">
                            <span>&#8212;</span>
                            <h3> what I know </h3>
                            <span> &#8212;</span>
                        </div>
                    </div>

                    <div className="skill">
                        {
                            skill.map(({ title, url }, index) => (
                                <div className="skill_box" key={index}>
                                    <div className="image_box">
                                        <i className={url}></i>
                                    </div>
                                    <div className="title">
                                        <p>{title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills
