import React from 'react';
import qualification from "./qualification.png";
import Hr from './Hr';

const Qualification = () => {



    return (
        <>

            <div className="main-section">
            <h2 className="heading-text">Education</h2>
                <div className="container1">
                    <div className="edu-exp order-2 order-lg-1">
                        
                        <div className="experience-list ">
                            <div className="experience-content">
                                <h2>SILVER OAK UNIVERSITY</h2>
                                <h3>2021-2025</h3>
                                <p>B.TECH IN INFORMATION & TECHNOLOGY</p>
                                <p>CPI : 9.38</p>
                            </div>
                        </div>
                        <div className="experience-list">
                            <div className="experience-content">
                                <h2>SHREE SWAMINARAYN GURUKUL,SURAT</h2>
                                <h3>2020-2021</h3>
                                <p>HSC GUJRAT BOARD</p>
                                <p>Percentage : 83%</p>

                            </div>
                        </div>
                        <div className="experience-list">
                            <div className="experience-content">
                                <h2>SHREE SWAMINARAYN GURUKUL,SURAT</h2>
                                <h3>2018-2019</h3>
                                <p>SSC GUJRAT BOARD</p>
                                <p>Percentage : 83%</p>
                            </div>
                        </div>
                    </div>
                    <div className='img_edu'>
                        <div className='img-row'>
                            <img src={qualification} alt="qualification" className="edu_img" srcset="" width='500px' height='500px' />
                        </div>
                    </div>
                </div>
            </div>

            <Hr />
        </>
    );
};

export default Qualification;