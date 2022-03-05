import React from 'react'

/* pass down {text} prop that was created w TaskList map function*/
export const Task = ({text}) => {
  return (
    <div className='task-item'>

        <div className='check'>
          <div className='check-mark'>

          </div>
        </div>

      <div className='task-text'>
        <p>{text}</p>
      </div>

    </div>
  )
}
