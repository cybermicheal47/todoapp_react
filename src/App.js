import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";






const  App = () =>    {
	
	// State for managing tasks and show/hide AddTask component
const [showAddTask,setShowAddTask] = useState(false)

	const[tasks, setTasks] = useState( [
		{  id : 1,
		
			text: 'read a book',
			day : '12th of may, 1:30pm ',
			reminder: true,
		},
		
		{  id : 2,
		
			text: 'Goto the supermarket ',
			day : '17th of june, 8:00am',
			reminder: false,
		},
		{  id : 3,
		
			text: ' Need a new phone ',
			day : '19th of july, 9:00am',
			reminder: false,
		}
		
		
		]
			)
	
// Delete Task
const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id    ))
}


//toggle reminder
const toggleReminder = (id) => {
	setTasks(
		tasks.map((task) =>
		task.id === id ? { ...task, reminder: !task.reminder    }: task
		)
	)


}

//add Task 
const addTask = (tas) => {
	const id = Math.floor(Math.random() * 1000) + 1
   const newTask = { id, ...tas}
   setTasks([ ...tasks,newTask])
}








	return(
<div className='container'>
	<Header  onAdd={() =>  setShowAddTask (!showAddTask)     }  showAdd= {showAddTask} />
	{showAddTask &&  <AddTask onAdd= {addTask} /> }
	{  tasks.length > 0 ?   
	<Tasks tasks = {tasks} OnDelete={deleteTask} onToggle={toggleReminder}   /> : 'No Task AVailable' }
	



</div>



	)

}





export default App ;
