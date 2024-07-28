import React from 'react';
import Hr from "./Hr";
import Sdata from './Sdata';
import Card from './Card';

const About = () => {



    return (
        <>
            <section id='header2' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto'>
                            <h1>About Me</h1>
                            <p>I have successfully completed two years of my program and am excited to continue my educational journey.Throughout my academic career,
                                I have developed a strong interest and passion for technology and its applications.During my time as an IT student, I have actively participated in various academic and extracurricular activities. These experiences have allowed me to enhance my technical skills, collaborate with fellow students, and develop a well-rounded understanding of the field. Additionally, I have been involved in group projects and have gained valuable experience in problem-solving, critical thinking, and effective communication.
                                Apart from my academic pursuits, I also enjoy staying up to date with the latest advancements in technology by exploring online resources, attending tech conferences, and participating in workshops. This helps me broaden my knowledge and enables me to apply innovative solutions to real-world problems.
                                In the future, I aspire to work in the IT industry, leveraging my skills and knowledge to contribute to the development of cutting-edge technologies and make a positive impact. I am eager to continue learning, refining my abilities, and keeping pace with the dynamic nature of the IT field. </p>
                        </div>
                    </div>
                </div>
            </section>

            <Hr />

            <div className='my-5 text-center'>
                <h1 className='tab-center sr'> My Projects </h1>
            </div>

            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>
                            {
                                Sdata.map((val, ind) => {
                                    return < Card key={ind} imgsrc={val.imgsrc} title={val.title} p={val.p} link={val.link}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Hr />

            <section id='header2' className='d-flex align-items-center'>
                <div className='container-fluid nav_bg'>
                    <div className='row'>
                        <div className='col-lg-10 mx-auto'>
                            <h1>Achivements</h1>
                            <h2>Google Cloud Skill Boots Memeber Since 2022 </h2>
                            <p><a href="https://www.cloudskillsboost.google/public_profiles/e6c177df-15c7-4f79-a4b3-12965be86ee5" className="linkbuton"  target="_blank" rel="noopener noreferrer">Go to Link</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <Hr />
        </>
    );
};

export default About;