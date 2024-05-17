import React from 'react';

function PizzaCard(props) {
    return (
        <div>
            <div>
                <img src={props.img} />
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>            
        </div>
        
    )
}


export default PizzaCard;