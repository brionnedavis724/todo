import './App.css';
import { useState, useEffect } from 'react'
// import themes from './components/Themes';

/*
useEffect is a react hook that allows us to perfrom "side effects" at any stage of component's life cycle
side effect: api call, adding en event listener, a function I want to run 

// component life cycle
componentDidMount (when the component first renders)
componentDidUpdate (when it renders)
componentWillUnmount (when the component is removed from app)
*/

// import TaskInput from "./components/TaskInput"
// import TaskList from "./components/TaskList"
import { TaskInput } from "./components/TaskInput"
import { TaskList } from "./components/TaskList"

/*
Todos for Todo App
Part 1:
- Finish up minor css
- Create a data array of objects (todos)
- Create a state that holds that tasks data
- Pass that data to Tasklist and map through to create Task component for each task
- Destrcture props and make Task dynamic
Part 2:
- Pass tasks and setTasks state to TaskInput
- Create input state
- Set up handleChange function to update input state
- set value of input to input
- Create handleForm function to create new Task
- Create an new task object and how would you add that to the array of tasks?
*/

// create a data array of objects. ea object represents a todo/task
// let data = [
//   { id: 1 , text: "finish task" , completed: false }, // if task object has a property of false, task is NOT completed
//   {}
// ]
const data = [
  { id: 1, text: "Finish contacts hw", status: false, img: 'https://cdn-icons-png.flaticon.com/512/3221/3221845.png' },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];
/* take data, whether hard coded or from API and store in state. destruct from there */
/* state is used to carry info to another component */
/* state is data we want to keep track of and change later on */
/* React will 'react' to whatever state is */

// const changeTheme = () => {
//   console.log('changing theme')
// }
 
function App() {
  /* put hook at top level of componenet (here) */
  // what do I want to keep track of?
  // const [] = useState() // equivalent to: let tasks = []
  // const [tasks, setTasks] = useState() // name the state data whatever you want. we chose to name it 'task'
  // const [tasks, setTasks] = useState("HELLO") // initializes state with a string "HELLO"
  // const [tasks, setTasks] = useState([]) // use an empty array when making an API call ; equivaltent to: let tasks = []
  const [tasks, setTasks] = useState(data)
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  const [filterStatus, setFilterStatus] = useState("all")

  // setTasks(data) // changes the state; equivalent to: tasks = data
  /* setting up variable vs state:
  state will directly effect the component
  will be more reactive */

  // console.log(tasks)

  useEffect(() => {
    // when I change my filterStatus I want to update my tasks to the corresponding
    const handleFilter = () => {
      if (filterStatus === "active") {
        // what kind of tasks should I have?
        // how do I update my tasks with only the "active" tasks
        // get array filtered with only the active tasks
        console.log("hello, I'm active")
        // setTasks([{}])
        setFilteredTasks(tasks.filter((task) => task.status === false))
        /* if filter status is active, update tasks to be the filtered version */

      } else if (filterStatus === "completed") {
          console.log('completed tasks')
          setFilteredTasks(tasks.filter((task) => task.status === true))

      } else {
        // setTasks(tasks)
        setFilteredTasks(tasks)
      }
    }
    // setTasks(UPDATEDTASKS)
    handleFilter() 
  },[tasks, filterStatus])

  // change theme with each click of a button
  // const [newTheme, setNewTheme] = useState(themes)
  // console.log(newTheme)
  const newTheme = () => {
    console.log('theme changed!')
    // setTheme("bg1")
  }

  return (
    <div className="App">
      <div className="container">

        <div className='header'>
          <h1>What's up, <span style={{ color: '#66C7F4', fontStyle: 'italic' }} >Brionne!</span></h1>
          {/* <h3>What's next?</h3> */}
          <img onClick={newTheme} src="./images/images/icon-sun.svg" alt="icon-sun"/>       
        </div>
        
        {/* it is possible to pass down functions so that other components can use them */}
        <TaskInput tasks = {tasks} setTasks = {setTasks} />

        {/* <TaskList /> */}
        {/* in TaskList, pass down the variable w key.
        this is how you pass down props */}
        {/* passing down 'tasks' to TaskList as a prop */}
        <TaskList 
          tasks = {tasks}
          setTasks = {setTasks}
          filterStatus = {filterStatus}
          setFilterStatus = {setFilterStatus}
          filteredTasks = {filteredTasks}
        /> {/* offers child(TaskList) some candy(props) */}
      </div>
    </div>
  );
}

export default App;
