import React from 'react';
import './taskItem.css';
import crossIcon from '../../img/cross-icon.png';
import flagIcon from '../../img/flag-icon.png'
import classNames from 'classnames';

const TaskItem = ({value, onDelete, onSetImportant, important}) => {

    let listClassNames = classNames('task-item', {'important': important})

    return (
        <li className='task-list-item'>
            <button onClick={onSetImportant} className='flag-btn'>
                <img src={flagIcon} alt='flag-icon' className='flag-icon'/>
            </button>
            <div className={listClassNames}>
                <span className='task-item-span'>{value}</span>
                <button onClick={onDelete} className='delete-btn'>
                    <img src={crossIcon} alt='cross-icon' className='cross-icon'/>
                </button>
            </div>
        </li>
    );
}

export default TaskItem;
