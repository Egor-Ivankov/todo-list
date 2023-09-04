import React from 'react';
import TaskItem from '../Task-item/TaskItem';
import { useSelector, useDispatch } from 'react-redux';
import {tasksDeleted, taskSetImportant} from './tasksSlice';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './tasks.css';

const Tasks = () => {   
    const tasks = useSelector(state => state.tasks.tasks);
    const isImportant = useSelector(state => state.filters.isImportant);
    const searchFilter = useSelector(state => state.search.value);
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

    const getSearchedTasks = (tasks) => {
        if (searchFilter < 1) {
            return tasks;
        }
        return tasks.filter(item => item.value.indexOf(searchFilter) > -1);
    };

    const filteredTasks = tasks.filter(item => item.important === isImportant);

    const searchedTasks = getSearchedTasks(tasks);
    const searchedFilteredTasks = getSearchedTasks(filteredTasks);
    
    const elements = renderTasks(searchedTasks);
    const renderFilteredTasks = renderTasks(searchedFilteredTasks);
    
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
