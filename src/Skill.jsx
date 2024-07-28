import React from 'react';
import Cdata from './Cdata';
import Card1 from './Card1';


const Skill = () => {



    return (
        <>
            <section id='skill'>
                <div className="row">
                    <h2 className="section-heading">My Skills</h2>
                </div>
                <div className="row">
                    {
                        Cdata.map((val, ind) => {
                            return < Card1 key={ind} imgsrc={val.imgsrc} title={val.title}  />
                        })
                    }
                </div>
            </section>

        </>
    );
};

export default Skill;