
import Task from "./Task"


const Tasks = ({tasks, OnDelete, onToggle}) => { 
 

  return (
    <div>

     {tasks.map((task) =>( 
     <Task key={task.id} task={task} OnDelete = {OnDelete} onToggle={onToggle}    />
       



     )
     )}

    </div>
  )
}

export default Tasks
