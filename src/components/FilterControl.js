import React from 'react'

export const FilterControl = ({filterStatus, setFilterStatus}) => {

  // how can I keep track of filterStatus?
  // const [filterStatus, setFilterStatus] = useState("all")
  // console.log(filterStatus)

  const handleStatus = (status) => {
    // console.log('I have been clicked')
    setFilterStatus(status)
  }

  return (
    <div className='items-statuses'>
      <span onClick={() => handleStatus("all")}>All</span>
      <span onClick={() => handleStatus("active")}>Active</span>
      <span onClick={() => handleStatus("completed")}>Completed</span>
    </div>
  )
}
