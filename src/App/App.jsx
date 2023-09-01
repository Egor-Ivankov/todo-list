import Tasks from '../Features/Tasks/Tasks';
import TaskAddForm from '../Features/Task-add-form/TaskAddForm';
import './app.css';
function App() {
    return (
        <div className='app'>
            <h1>To-do List</h1>
            <TaskAddForm/>
            <Tasks/>
        </div>
    )
}

export default App
