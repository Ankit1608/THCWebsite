import React from 'react';
import "./righthomepage.css";
import Top from "../images/top.png";
import Left from "../images/left.png";
import Right from "../images/right.png";

function righthomepage()
{
    return(
        <div>
            <div className='homepage-right-container-1'>
                
                <div className='homepage-right-textcontainer'>
                    <p>Get 10-25% off on selected items</p>
                </div>
                
                <img src={Top} />
                
            </div>
            <div className='homepage-right-container-2'>
                <div className='homepage-right-container-3'>
                    <img src={Left} />
                </div>
                <div className='homepage-right-container-3'>
                    <img src={Right} />
                </div>
            </div>
        </div>
    )
}

export default righthomepage;