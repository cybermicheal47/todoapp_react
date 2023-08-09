import React from 'react'
import Feedbackitem from './Feedbackitem'
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import Feedbackcontext from '../context/Feedbackcontext';




function FeedbackList() {
const {feedback} =useContext(Feedbackcontext)


  if (!feedback || feedback.length ===0){
    return <p>
        No feedback yet
    </p>
  }

 

  return (
    <div className='feedback-List'>
      <AnimatePresence>
{feedback.map((item)=>
(

  <motion.div key={item.id}
  initial ={{opacity:0}}
  animate = {{opacity : 1}}
  exit = {{opacity : 0}}
  >
    <Feedbackitem key={item.id} item={item} 
    
    />
    </motion.div>
))
}  
</AnimatePresence>  
    </div>
  ) 




//   return (
//     <div className='feedback-List'>
// {feedback.map((item)=>
// (
//     <Feedbackitem key={item.id} item={item} 
    
//     handledelete={handledelete}
    
//     />
// ))
// }    
//     </div>
//   )
}

export default FeedbackList
