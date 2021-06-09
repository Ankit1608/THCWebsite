import React from 'react';
import "./genrebutton.css"

function genrebutton({title}){
    return(
    <div>
        <div className='genrebutton-maincontainer-2'>
            <div className='genrebutton-titlecontainer'>
            <p>photo</p>
            <p style={{paddingLeft:'3px'}}>{title}</p>
            </div>
            <p style={{paddingRight:'10px'}}>{">"}</p>
        </div>
    </div>
    );

}

export default genrebutton;