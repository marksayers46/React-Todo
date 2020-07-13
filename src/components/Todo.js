import React from 'react';


const Todo = props => {
    let itemClassName = 'item';
    if (props.item.completed) {
        itemClassName = itemClassName + ' completed';
    }

    const handleClick = () => {
        props.toggleCompleted(props.item.id)
    };

    return(
        <div>
            <p className={itemClassName} onClick={handleClick}>{props.item.task} </p>
        </div>
    )

}

export default Todo;