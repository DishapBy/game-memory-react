import React from 'react';
import './style.css';

function Item(props) {

    let propsColor = 'Item blue';
    if(props.found === true){
        propsColor = 'Item red';
    }

    propsColor += ` ${props.active}`;

    const allMyFunc = (event) => {
        props.myFunc(event);
        props.changeActiveClass(props.id)
    }

    const funcHandler = props.active === "selected" ? null : allMyFunc


    return(
        <div className={propsColor} onClick={funcHandler}>
            <h2>{props.letter}</h2>
        </div>
    )
}

export default Item;