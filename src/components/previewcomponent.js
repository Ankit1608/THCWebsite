import React from 'react';

import Shirt from '../images/shirt.png'; 

function previewcomponent({name,price}){
    return(
        <div style={{maxHeight:"450px",minHeight:"450px",height:"450px",overflow:"hidden"}}>
            <div>
            <img src={Shirt} />
            <div style={{minHeight:"90px",maxHeight:"90px",overflow:"hidden"}}>
                <p style={{color:"#36454F",fontSize:"24px",maxWidth:"300px",fontWeight:"500px"}}>{name}</p>
                </div>
            </div>
            <p style={{fontWeight:"bold",bottom:0}}>₹ {price}</p>
            
            
        </div>
    )

}

export default previewcomponent;