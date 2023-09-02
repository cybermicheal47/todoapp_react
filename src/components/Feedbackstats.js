import React from 'react'

import { useContext } from 'react'
import Feedbackcontext from '../context/Feedbackcontext'

function Feedbackstats() {
  const {feedback} = useContext(Feedbackcontext)
//calculate the rating average 

let average = feedback.reduce((acc, cur)=> {
    return acc + cur.rating
}, 0)/ feedback.length

 console.log(average)

 average =average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
     <h4>{feedback.length} Review</h4>  
     <h2>Average Rating : {isNaN(average)? 0 : average}</h2>
    </div>
  )



}

export default Feedbackstats
