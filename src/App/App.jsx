import TaskSearch from '../Features/Task-search/TaskSearch';
import TaskFilters from '../Features/Task-filters/TaskFilters';
import Tasks from '../Features/Tasks/Tasks';
import TaskAddForm from '../Features/Task-add-form/TaskAddForm';
import './app.css';
function App() {
    return (
        <div className='app'>
            <h1>To-do List</h1>
            <div className='app-container'>
                <TaskSearch/>
                <TaskFilters/>
            </div>
            <Tasks/>
            <TaskAddForm/>
        </div>
    )
}

export default App
