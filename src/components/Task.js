import React, { useState } from 'react'
import Check from '../images/icon-check.svg' // access to image, reference it using the word "Check"

/* pass down {text} prop that was created w TaskList map function*/
export const Task = ({text, task, tasks, setTasks}) => {

  // create a state variable to keep track of mutable task
  const [mutableTask, setMutableTask] = useState(task);

  const checked = mutableTask.status ? "checked" : "";
  /* if mutableTask.status is true, then "checked" is stored in variable check; if mutableTask.status is false then empty string " " will be stored in variable checked  */
  const checkIcon = mutableTask.status ? (<img src={Check} alt="completed" />) : "";

  const markCompleted = () => {
    // console.log("I HAVE BEEN MARKED")
    console.log(task)
    // what should happen when checked?
    // update CSS to marked
    // switch the task status
    // pull in the task this function
    // get access to the status event then switch boolean
    // console.log(mutableTask.status) // let mutableTask = {}
    // then update mutableTask w the new status
    // setMutableTask(mutableTask)
    // setMutableTask(mutableTask.status = true)
    // setMutableTask({...mutableTask, status: true})
    setMutableTask({...mutableTask, status: !mutableTask.status }) // {...taking the initial state, then changing it}
    /* the new status will be the opposite of the current status */

    // update tasks to the new array of objects and their new statuses
    // this will update the statuses in my backend
    const updatedTasks = tasks.map((item) => {
      // console.log(item)
      // find the coreesponding tasks from map
      // ternary operator
      // task.id === item.id ? console.log("match found") : console.log("not a match");
      return task.id === item.id ? {...item, status : !item.status} : item
    })
    // setTasks([{}])
    setTasks(updatedTasks)
  }

  return (
    <div className='task-item'>
      <div className='check' onClick={markCompleted}>
        <div className={`check-mark ${checked}`}>
          {checkIcon}  
        </div>
      </div>

      <div className={`task-text ${checked}`}>
        <p>{text}</p>
      </div>
    </div>



    // <div className='task-item'>

    //     {/* <div className='check'> */}
    //   <div className='check' onClick={markCompleted}>
    
    //     <div className='check-mark'>
    //     {/* <div className={`check-mark ${checked}`}> */}
    //       {/* {checkIcon} */}
    //     </div>
    //   </div>

    //   <div className='task-text checked'>
    //     <p>{text}</p>
    //   </div>

    // </div>
  )
}
