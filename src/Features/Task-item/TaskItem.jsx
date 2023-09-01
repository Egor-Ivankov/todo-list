import React from 'react';
import './taskItem.css';
const TaskItem = ({value, onDelete}) => {
    return (
        <li className='task-item'>
            <span className='task-item-span'>{value}</span>
            <button onClick={onDelete} className='delete-btn'>Delete</button>
        </li>
    );
}

export default TaskItem;
