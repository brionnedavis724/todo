import React, { useState } from 'react'

/* pass down {text} prop that was created w TaskList map function*/
export const Task = ({text, task}) => {

  // create a state variable to keep track of mutable task
  const [mutableTask, setMutableTask] = useState(task)

  const markCompleted = () => {
    // console.log("I HAVE BEEN MARKED")
    // console.log(task)
    // what should happen when checked?
    // update CSS to marked
    // switch the task status
    // pull in the task this function
    // get access to the status event then switch boolean
    setMutableTask(mutableTask.status = true)
    // then update mutableTask w the new status
  }

  return (
    <div className='task-item'>

        <div className='check' onClick={markCompleted}>
          <div className='check-mark'>

          </div>
        </div>

      <div className='task-text checked'>
        <p>{text}</p>
      </div>

    </div>
  )
}
