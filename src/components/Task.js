import React, { useState } from 'react'
import Check from '../images/icon-check.svg' // access to image, reference it using the word "Check"

/* pass down {text} prop that was created w TaskList map function*/
export const Task = ({text, task}) => {

  // create a state variable to keep track of mutable task
  const [mutableTask, setMutableTask] = useState(task);

  const checked = mutableTask.status ? "checked" : "";
  /* if mutableTask.status is true, then "checked" is stored in variable check; if mutableTask.status is false then empty string " " will be stored in variable checked  */
  const checkIcon = mutableTask.status ? (<img src={Check} alt="completed" />) : "";

  const markCompleted = () => {
    // console.log("I HAVE BEEN MARKED")
    // console.log(task)
    // what should happen when checked?
    // update CSS to marked
    // switch the task status
    // pull in the task this function
    // get access to the status event then switch boolean
    console.log(mutableTask.status) // let mutableTask = {}
    // then update mutableTask w the new status
    // setMutableTask(mutableTask)
    // setMutableTask(mutableTask.status = true)
    // setMutableTask({...mutableTask, status: true})
    setMutableTask({...mutableTask, status: !mutableTask.status }) // {...taking the initial state, then changing it}
    /* the new status will be the opposite of the current status */
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
