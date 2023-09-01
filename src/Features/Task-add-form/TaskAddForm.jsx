import React, {useState} from 'react';
import { nanoid } from 'nanoid';
import { tasksCreated } from '../Tasks/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';
import plusIcon from '../../img/plus-icon.png';
import './taskAddItem.css';

const TaskAddForm = () => {
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();
    const newTaskItem = {
        id: nanoid(),
        value: newTask,
        important: false
    }
    
    useSelector(state => state.tasks.tasks); //This code need for creating new IDs(without this code new IDs will be recurring)

    const onHandleSubmit = (e) => {
        e.preventDefault();
        if (newTask) {
            dispatch(tasksCreated(newTaskItem))
        } else return;
        setNewTask('');
    }
    
    return (
            <form className="add-form" onSubmit={onHandleSubmit}>
                <input 
                    className="add-inp" 
                    type="text"  
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    name="Task-creater"
                    placeholder='New Task'
                    />
                <button className="add-btn" type='submit'>
                    <img src={plusIcon} alt="plus-icon" className='plus-icon'/>
                </button>
            </form>
    );
}

export default TaskAddForm;
