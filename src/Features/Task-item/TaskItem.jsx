import React from 'react';
const TaskItem = ({value}) => {
    return (
        <div>
            <span>{value}</span>
            <button>Delete</button>
        </div>
    );
}

export default TaskItem;
