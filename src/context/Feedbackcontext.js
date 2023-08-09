import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Feedbackcontext = createContext()

export const Feedbackprovider =({children}) => {
const[feedback, setfeedback] = useState([{
 id:1,
 text: 'we back again ',
 rating: 7,

},
{
  id:2,
  text: 'this a great product ',
  rating: 9,
 
 },




])

const [feedbackedit, setfeedbackedit] = useState(
  {
    item:{},
    edit: false
  }
)


//add feedback
const addfeedback = (newfeedback) => {
  newfeedback.id = uuidv4();
  setfeedback([newfeedback, ...feedback]);
};



// delete feedback
const deletefeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
    
  };


//set item to be updated


const editfeedbackfunc =(item) =>{
  setfeedbackedit({
    item,
    edit: true
  })
}

//update item

const updatefeedback = (id,updateitem) =>{
setfeedback(
  feedback.map((item)=> (item.id ===id ? {...item, ...updateitem}: item))
)
}




return <Feedbackcontext.Provider value={{
    feedback,
    deletefeedback,
    addfeedback,
    editfeedbackfunc,
    feedbackedit,
    updatefeedback
}}     >
{children}




</Feedbackcontext.Provider>

}

export default Feedbackcontext