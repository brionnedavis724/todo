import './App.css';
import { useState } from 'react'
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
  { id: 1, text: "Finish contacts hw", status: false },
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


function App() {
  /* put hook at top level of componenet (here) */
  // what do I want to keep track of?
  // const [] = useState() // equivalent to: let tasks = []
  // const [tasks, setTasks] = useState() // name the state data whatever you want. we chose to name it 'task'
  // const [tasks, setTasks] = useState("HELLO") // initializes state with a string "HELLO"
  // const [tasks, setTasks] = useState([]) // use an empty array when making an API call ; equivaltent to: let tasks = []
  const [tasks, setTasks] = useState(data)

  // setTasks(data) // changes the state; equivalent to: tasks = data
  /* setting up variable vs state:
  state will directly effect the component
  will be more reactive */

  // console.log(tasks)

  return (
    <div className="App">
      <div className="container">

        <div className='header'>
          <h1>TODO</h1>
          <img src="./images/images/icon-sun.svg" alt="icon-sun"/>
        </div>
        
        {/* it is possible to pass down functions so that other components can use them */}
        <TaskInput tasks = {tasks} setTasks = {setTasks} />

        {/* <TaskList /> */}
        {/* in TaskList, pass down the variable w key.
        this is how you pass down props */}
        {/* passing down 'tasks' to TaskList as a prop */}
        <TaskList tasks = {tasks} /> {/* offers child(TaskList) some candy(props) */}

      </div>
    </div>
  );
}

export default App;
