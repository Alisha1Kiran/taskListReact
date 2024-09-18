import React from 'react'

const tasks=['Learn react', 'Practice codeing', 'Build projects']
const handleTask = () =>{
    console.log(tasks)
}
const handleClick = (task) =>{
    console.log(`you clicked on ${task}`)
}
const TaskList = () => {
  return (
    <div>
        <h1>Task List</h1>
        <button onClick={handleTask}>Get Tasks</button>
        <ul>
            {
                tasks.map((task, index) => (
                    <li key={index}>{task}
                    <button onClick={() => handleClick(task)}>Click Me</button></li>
                ))
            }
        </ul>
    </div>
  )
}

export default TaskList