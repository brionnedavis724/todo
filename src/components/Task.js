import React, { useState } from 'react'
import Check from '../images/icon-check.svg' // access to image, reference it using the word "Check"

/* pass down {text} prop that was created w TaskList map function*/
export const Task = ({text, task, tasks, setTasks}) => {

  // create a state variable to keep track of mutable task
  const [mutableTask, setMutableTask] = useState(task);

  const checked = mutableTask.status ? "checked" : "";
  /* if mutableTask.status is true, then "checked" is stored in variable checked; if mutableTask.status is false then empty string " " will be stored in variable checked  */
  const checkIcon = mutableTask.status ? (<img src={Check} alt="completed" />) : "";

  const markCompleted = () => {
    // console.log("I HAVE BEEN MARKED")
    // console.log(task)
    
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

  const bookmarkTask = () => {
    console.log('urgent')
    alert('Task set as urgent!')
  }

  const deleteTask = () => {
    console.log('deleted')
    // access the id of ea task; store into variable currentTaskId
    // when delete button gets pressed, the value of the current task's id gets saved inside currentTaskId
    const currentTaskId = task.id 

    // use the setTasks() function in order to manipulate all the tasks
    // filter through the tasks[]
    // look for ea task who's id is not currentTaskId
    // filter out/remove task with currentTaskId 
    // only show in app tasks that is NOT stored in currentTaskId
    setTasks(tasks.filter(task => task.id !== currentTaskId))
  }

  return (
    <div className='task-item'>

      <div className='check' onClick={markCompleted}>
        <div className={`check-mark ${checked}`}>
          {checkIcon}  
        </div>
      </div>

      <div className='taskTextIcons'>
        <div className={`task-text ${checked}`}>
          <p>{text}</p>
        </div>
          
          <div className="deleteIcons">
            <img className='icons' onClick={bookmarkTask} src='https://cdn-icons.flaticon.com/png/512/2031/premium/2031022.png?token=exp=1647735367~hmac=f2cf3bc7a22b35548193d2e8d4aeeaf0' alt='fav/bookmark' />
            <img className='icons' onClick={deleteTask} src='https://cdn-icons-png.flaticon.com/512/3221/3221897.png' alt='delete' />
            {/* <i className="fa-solid fa-square-minus"></i> */}
          </div>
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
