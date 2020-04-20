import React from 'react';

const Items = (props) =>{
        return(
            <header className="top">
                <h1>Shop-Kart</h1>
                <h3 className="tagline">{props.tagline}</h3>
            </header>
        )
}

export default Items;