import React, { useState } from 'react'
import { Task } from './Task'
import { FilterControl } from './FilterControl'

/* child (TaskList) receives candy(props) ; this line of code shows TaskList ACCEPTING the props */
export const TaskList = ({tasks, setTasks, filterStatus, setFilterStatus, filteredTasks}) => { // destructing props
    // console.log(tasks)

    let [tally, setTally] = useState(0)

    return (
        <div className='task-list-wrapper'>

            <div className='task-list'>
            {/* map through an array of todos */}
            {/* for every todo create a task component */}
            {/* {tasks.map((item) => {
                console.log(item)
                return <Task />
            })} */}
            {filteredTasks.map((task) => {
                // console.log(task)
                // return <Task task = {task} />
                // pass down info from the tasks object, destruct it. assign a new key w a new value in object
               
                return <Task
                    text = {task.text}
                    key = {task.id}
                    status = {task.status}
                    task = {task}
                    tasks = {tasks}
                    setTasks = {setTasks}
                    />
            })}
                {/* {console.log(tasks)} */}
            </div>

            <div className='task-items-info'>
                <div className='items-left'>
                    {/* {console.log(tasks)} */}
                    
                    {tasks.map((task) => {
                        tally+=1
                        console.log('and another one')
                    })}
                    {/* 5 items left */}
                    {tally} items left
                </div>

                <FilterControl 
                    filterStatus = {filterStatus}
                    setFilterStatus = {setFilterStatus}
                /> 

                <div className='items-clear'>
                    <span>Clear Completed</span>
                </div>
            </div>

        </div>
    )
} 

// export default function TaskList() {
//     return (
//         <div className='task-list-wrapper'>
//             <div className='task-list'>
//                 {/* <Task />
//                 <Task />
//                 <Task />
//                 <Task /> */}
//             </div>

//             <div className='task-items-info'>
//                 <div className='items-left'>
//                     5 items left
//                 </div>

//                 {/* <FilterControl />  */}

//                 <div className='items-clear'>
//                     <span>Clear Completed</span>
//                 </div>
                
//             </div>
//         </div>
//     )
// }
