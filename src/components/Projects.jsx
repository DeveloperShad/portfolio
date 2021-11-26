
import React from 'react'

const Projects = () => {

    const project = [
        {
            banner: 'https://camo.githubusercontent.com/ad6fe3c5d72ed1e8a209d17bdd88b5095fa9a78c2db0549bfb11dd3d70f518d9/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a4a7a307977385f4d6c3851424534616c5947593865512e706e67',
            title: 'Dev.to',
            description: 'A constructive and inclusive social network for software developers. With you every step of your journey.',
            tech_stack: 'Tech Stack',
            icon1: 'fab fa-react',
            icon_title1: 'React',
            icon2: 'fab fa-node-js',
            icon_title2: 'Node',
            icon3: '',
            icon_title3: 'MERN',
            demo_url: 'https://anwar-dev-to.netlify.app/',
            git_url: 'https://github.com/singhabhishek6/Dev-Clone'

        },
        {
            banner: 'https://github.com/DeveloperShad/portfolio/blob/master/public/images/FoodXprs%20Lunch%20Services%20Pvt%20Ltd%20_%20Hyderabad.png?raw=true',
            title: 'FoodXprs',
            description: 'FoodXprs Lunch Services Pvt Ltd provides Lunch Services to meet the healthy lunch requirements of employees and professionals who are unable to prepare it themselves lunch due to hectic mornings.',
            tech_stack: 'Tech Stack',
            icon1: 'fab fa-html5',
            icon_title1: 'Html',
            icon2: 'fab fa-css3-alt',
            icon_title2: 'Css',
            icon3: 'fab fa-js',
            icon_title3: 'JS',
            demo_url: 'https://foodxprs.netlify.app/',
            git_url: 'https://github.com/ankitbajpai1607/FoodXprs_clone'

        },

        // {
        //     banner: 'https://github.com/DeveloperShad/portfolio/blob/master/public/images/COVID-19%20World%20Data.png?raw=true',
        //     title: 'COVID-19 World',
        //     description: 'COVID-19 World provide all data of Coronavirus worldwide means user can see all COVID-19 relate data of any country and get updates in this COVID-19 pandemic situation.',
        //     tech_stack: 'Tech Stack',
        //     icon1: 'fab fa-html5',
        //     icon_title1: 'Html',
        //     icon2: 'fab fa-css3-alt',
        //     icon_title2: 'Css',
        //     icon3: 'fab fa-js',
        //     icon_title3: 'JS',
        //     demo_url: 'https://covid-19world.netlify.app/',
        //     git_url: 'https://github.com/developershad/COVID-19'

        // },

        

        {
            banner: 'https://github.com/DeveloperShad/portfolio/blob/master/public/images/Premier%20League%20Clone.png?raw=true',
            title: 'Premier League',
            description: 'Premier League website is the official website of soccer player  which provides all live matches and score so users can get all the news and update related to premier league.',
            tech_stack: 'Tech Stack',
            icon1: 'fab fa-html5',
            icon_title1: 'Html',
            icon2: 'fab fa-css3-alt',
            icon_title2: 'Css',
            icon3: 'fab fa-js',
            icon_title3: 'JS',
            demo_url: 'https://cloning-premierleague.netlify.app/',
            git_url: 'https://github.com/Mangeshbk/Premier-League-clone'

        },
        {
            banner: 'https://github.com/DeveloperShad/portfolio/blob/master/public/images/mentimeter%20home.png?raw=true',
            title: 'Mentimeter',
            description: 'Mentimeter** is an easy-to-use presentation software used by more than 25 million people. With Mentimeter you can create fun and interactive presentations.',
            tech_stack: 'Tech Stack',
            icon1: 'fab fa-html5',
            icon_title1: 'Html',
            icon2: 'fab fa-css3-alt',
            icon_title2: 'Css',
            icon3: 'fab fa-js',
            icon_title3: 'JS',
            demo_url: 'https://eloquent-shaw-3ecec1.netlify.app/',
            git_url: 'https://github.com/ajcodeskills/Mentimeter_Clone'

        },


    ]

    return (
        <>
            <section id="Projects">
                <div className="project">
                    <div className="project_heading">
                        <h2>Projects</h2>
                        <div className="project_subtitle">
                            <span>&#8212;</span>
                            <h3>I have worked on</h3>
                            <span> &#8212;</span>
                        </div>
                    </div>
                    <div className="project_container">
                        {
                            project.map(({ banner, title, description, tech_stack, icon1, icon_title1, icon2, icon_title2, icon3, icon_title3, demo_url, git_url }, index) => (
                                <div key={index} className="project_box">
                                    <div className="project_image">
                                        <img src={banner} alt={title}/>
                                    </div>
                                    <div className="project_title">
                                        <h3>{title}</h3>
                                    </div>
                                    <div className="project_description">
                                        <p>{description}</p>
                                    </div>
                                    <div className="tech_stack">
                                        <h4>{tech_stack}</h4>
                                    </div>
                                    <div className="project_icon">
                                        <div className="icon">
                                            <i className={icon1}></i>
                                            <p>{icon_title1}</p>
                                        </div>
                                        <div className="icon">
                                            <i className={icon2}></i>
                                            <p>{icon_title2}</p>
                                        </div>
                                        <div className="icon">
                                            <i className={icon3}></i>
                                            <p>{icon_title3}</p>
                                        </div>
                                    </div>
                                    <div className="redirect_btn">
                                        <a href={demo_url} target="_blank" rel="noreferrer">visit</a>
                                        <a href={git_url} target="_blank" rel="noreferrer">code</a>
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

export default Projects
