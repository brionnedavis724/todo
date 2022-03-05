import React from 'react'
import { Task } from './Task'
import { FilterControl } from './FilterControl'

/* child (TaskList) receives candy(props) */
export const TaskList = ({tasks}) => {
    // console.log(tasks)

    return (
        <div className='task-list-wrapper'>

            <div className='task-list'>
            {/* map through an array of todos */}
            {/* for every todo create a task component */}
            {/* {tasks.map((item) => {
                console.log(item)
                return <Task />
            })} */}
            {tasks.map((task) => {
                // return <Task task = {task} />
                // pass down info from the tasks object, destruct it. assign a new key w a new value in object
                return <Task
                    text = {task.text}
                    key = {task.id}
                    completed = {task.completed}
                    />
            })}

                {/*
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                */}
            </div>

            <div className='task-items-info'>
                <div className='items-left'>
                    5 items left
                </div>

                <FilterControl /> 

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
