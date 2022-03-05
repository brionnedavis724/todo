import React from "react"

export const TaskInput = () => {
  return (
    // add tasks to input container
    <div className='task-input'>

    <div className='check'>
      <div className='check-mark'>
        {/* check mark image goes here */}
      </div>
    </div>

    <div className='new-todo-input'>
      <form>
        <input id="todo-input" type="text" placeholder="create a new todo..." />
      </form> {/*let's us sumbit info using onSubmit={}*/}
    </div>

    {/* task list component */}
    <div className="task-list"></div>

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