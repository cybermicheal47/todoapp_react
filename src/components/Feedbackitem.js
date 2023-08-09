import Card from "./shared/Card"
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from "react"
import Feedbackcontext from "../context/Feedbackcontext"

function Feedbackitem({item}) {
  const{deletefeedback, editfeedbackfunc} = useContext(Feedbackcontext)
  

   
  return (
    <Card>
        <div className='num-display'>{item.rating}</div>
<button className="close" onClick={() =>deletefeedback(item.id)}  >
  <FaTimes color="purple" />

</button>
<button onClick={() => editfeedbackfunc(item)}           className="edit">
  <FaEdit color="purple"/>
</button>

        <div className='text-display'>{item.text}</div>
      


    </Card>
  )
}

export default Feedbackitem
