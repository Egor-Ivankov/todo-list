import React from 'react';
import TaskItem from '../Task-item/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import {tasksDeleted, taskSetImportant} from './tasksSlice';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './tasks.css';

const Tasks = () => {   
    const tasks = useSelector(state => state.tasks.tasks);
    const isImportant = useSelector(state => state.filters.isImportant);
    const dispatch = useDispatch();

    const renderTasks = (arr) => {
        if (arr.length === 0) {
            return(
                <CSSTransition timeout={400} classNames='item'>
                    <li className='task-list-empty'>Task list is empty</li>
                </CSSTransition>
            )
        } 
        return arr.map(({id, ...props}) => {
            return (
                <CSSTransition key={id} timeout={400} classNames="item">
                    <TaskItem 
                        {...props} 
                        onDelete={() => dispatch(tasksDeleted(id))}
                        onSetImportant={() => dispatch(taskSetImportant(id))}
                        />
                </CSSTransition>
            )
        });
    }

    const elements = renderTasks(tasks);
    const filteredTasks = tasks.filter(item => item.important === isImportant);
    const renderFilteredTasks = renderTasks(filteredTasks);

    const filteredElements = () => {
        if (isImportant) {
            return renderFilteredTasks;
        } else {
            return elements;
        }
    }
    
    const renderElements = filteredElements();

    return (
        <TransitionGroup component='ul' className='tasks-list'>
                {renderElements}
        </TransitionGroup>
    );  
}

export default Tasks;
