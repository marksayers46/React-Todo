import React from 'react';


const Todo = props => {
    let itemClassName = 'item';
    if (props.item.completed) {
        itemClassName = itemClassName + ' completed';
    }

    const handleClick = () => {
        props.toggleCompleted(props.item.id);
    };

    return(
        <div onClick={handleClick}>
            <p className={itemClassName}>{props.item.task} </p>
        </div>
    )

}

export default Todo;