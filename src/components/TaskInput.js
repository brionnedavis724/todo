import React, { useState, useEffect } from "react"

/*
how do I add a new todo item to my list?
take whatever I type in and push it to the list

how can I keep track of what I type in my input?
get the value of input ea time it's changed and save to state
then push to the list
*/

// pass down setTasks from App.js into TaskInput
export const TaskInput = ({tasks, setTasks}) => {
  
  const [input, setInput] = useState("")

  const [editedTask, setEditedTask] = useState(input.text)
  // const string = editedTask.text === '' ? console.log('no string'): console.log('string') ;

    useEffect(() => {
      setEditedTask(input.text)
    }, [input.text]) 
    
   /*
    if editedTask is an empty string, do not create a new task obj
    */
    // if (editedTask === '') {
    //   console.log('empty')
    // } else {
    //   console.log('not empty')
    //   // setTasks([newTask,...tasks]) // creates a newTask at the beginning of the list
    //   // create a new todo object
    // }

  // handleChange is a function that runs ea time theres a change in input
  const handleChange = (e) => { // (e) represents the event    
    // every time there's a change, grab what was typed
    // console.log(e.target.value) // within this event, grab the value of that input
    setInput(e.target.value) // update the state (setInput) with ea change
    setEditedTask(e.target.value)
    console.log(editedTask)
    // console.log(input)

  }
  // console.log(input)

  const handleForm = (e) => {
    e.preventDefault() // allows you to prevent regular undo when pressing ctrl+z; put your own undo
  
    const generateId = (array) => {
      const taskIDs = array.map((item) => item.id)
      // console.log(taskIDs)
      return Math.max(...taskIDs) + 1
    }

    const newTask = {
      // id: 7,
      id: generateId(tasks),
      text: input,
      status: false
    }
    console.log(newTask)
    // generateId(tasks)

    // add a new task to the list
    // tasks.push(newTasks)
    // console.log([...tasks, newTask])

    // setTasks([...tasks, newTask]) // setTasks() must be passed into this component from it's original component (App.js)
    setTasks([newTask,...tasks]) // creates a newTask at the beginning of the list
    setInput('') // once enter is pressed after task is typed, input box will go blank 
  }
  // console.log(tasks)

  // const addTaskHandler = () => {
  //   if (task)
  // }


  return (
    // add tasks to input container
    <div className='task-input'> 

      <div className='new-todo-input'>
        <form onSubmit={handleForm}> {/* when I press enter the handleForm function will run */}
          {/* onChange is an event  */}
          <input onChange={(handleChange)} id="todo-input" type="text" placeholder="create a new todo..." />
        </form> {/*lets us submit info using onSubmit={}*/}
      </div>

      <div className=''>
        <div className='plus'>
          {/* // check mark image goes here */}
          <img className='icons' src='https://cdn-icons-png.flaticon.com/512/753/753317.png' alt='' />
        </div>
      </div> 

      {/* task list component */}
      {/* <div className="task-list"></div> */}

    </div>
  )
}

// export default function TaskInput() {
//     return (
//       // add tasks to input container
//         <div className='task-input'>

//           <div className='check'>
//             <div className='check-mark'>
//               {/* check mark image goes here */}
//             </div>
//           </div>

//           <div className='new-todo-input'>
//             <form>
//               <input id="todo-input" type="text" placeholder="create a new todo.." />
//             </form> {/*let's us sumbit info using onSubmit={}*/}
//           </div>

//           {/* task list component */}
//           <div className="task-list"></div>

//         </div>
//     )
// }