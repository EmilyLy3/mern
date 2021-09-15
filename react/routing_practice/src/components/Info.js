import React from 'react';
import { useParams } from 'react-router';

const Info = () => {
    const {input, color1, color2} = useParams();
    console.log(input);
    console.log(color1);
    console.log(color2);


    return (
        <div>
            {isNaN(input) ?
                <h3 style={{color:color1, backgroundColor:color2}}>The word is: {input}</h3> :
                <h3 style={{color:color1, backgroundColor:color2}}>The number is: {input} </h3>
            }
        </div>
    );
};


export default Info;