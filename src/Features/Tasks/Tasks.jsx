import React from 'react';
import TaskItem from '../Task-item/TaskItem';
import {tasks} from './tasksSlice';

const Tasks = () => {
    const elements = tasks.map(tasks => <TaskItem 
                                                key={tasks.id}
                                                value={tasks.value}
                                        />);

    return (
        <ul>
            {elements}
        </ul>
    );  
}

export default Tasks;
