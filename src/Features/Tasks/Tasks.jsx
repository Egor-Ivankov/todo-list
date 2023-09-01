import React from 'react';
import TaskItem from '../Task-item/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import {tasksDeleted} from './tasksSlice';
import './tasks.css';

const Tasks = () => {   
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    const elements = tasks.map(({id, ...props}) => <TaskItem 
                                                {...props}
                                                onDelete={() => dispatch(tasksDeleted(id))}
                                        />);

    const renderElement = () => {
        if(elements.length) {
            return elements;
        } else {
            return (
                    <li className='task-list-empty'>Task list is empty</li>
            )
        }
    }
    return (
        <ul className='tasks-list'>
            {renderElement()}
        </ul>
    );  
}

export default Tasks;
