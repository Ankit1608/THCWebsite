import React from 'react';
import {Link } from "react-router-dom";

import Genrebutton from "./genrebutton";

const listing=[
    {
        title:"men's wear"
    },
    {
        title:"women's wear"
    },
    {
        title:"kis's wear"
    },
    {
        title:"shoes"
    },
]

function lefthomepage(){
    return(
        <div style={{paddingRight:"10px"}}>
            {listing.map((item)=>{
                return(
                    <Link to="/search" style={{textDecoration:"none", color:"black"}}>
                    <Genrebutton title={item.title} />
                    </Link>
                )
            })}
           
        </div>
    )
}

export default lefthomepage;