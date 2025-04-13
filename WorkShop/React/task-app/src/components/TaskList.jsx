import React from 'react'
import TaskCard from './TaskCard'

function TaskList({tasks}) {
  return (
    <div id='task-list'>
        {
            tasks.map((task) => (<TaskCard key={task.id} task={task} />))
        }
    </div>
  )
}

export default TaskList