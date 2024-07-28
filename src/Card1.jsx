import React from 'react';

const Card1 = (props) => {

 

    return (
        <>
            <div className="column">
                <div className="card1">
                    <div className="icon-wrapper">
                    <img src={props.imgsrc} className="imgsize" alt="..." height='50px' width='50px'/>
                    </div>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </>
    );
};

export default Card1;