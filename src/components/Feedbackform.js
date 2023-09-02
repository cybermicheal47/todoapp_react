import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState,useContext, useEffect } from 'react'
import Ratingselect from './Ratingselect'
import Feedbackcontext from '../context/Feedbackcontext'
function Feedbackform() {
 const [text, settext] = useState('')
 const [btndisabled , setbtndisabled] = useState(true)
 const[rating, setrating] = useState(10)
 const [message, setmessage] = useState('')

const{addfeedback, feedbackedit, updatefeedback} = useContext(Feedbackcontext)


useEffect(()=>{
if (feedbackedit.edit ===true) {
  setbtndisabled(false)
  settext(feedbackedit.item.text)
  setrating(feedbackedit.item.rating)
}



},[feedbackedit]

)






 const handletextchange = (e) =>{

if (text === '') {
  setbtndisabled(true)
  setmessage(null)

} else if ( text !== '' &&  text.trim().length <= 10) {
  setmessage('text must be at least 10 characters')
  setbtndisabled(true)
}
else {
  setmessage(null)
  setbtndisabled(false)
}



    settext(e.target.value)
 }

const handlesubmit = (e) =>
{
  e.preventDefault()
if (text.trim().length >10 ){
  const newfeedback ={
    text,
    rating,
  }

if(feedbackedit.edit=== true){
  updatefeedback(feedbackedit.item.id, newfeedback)
}
else {
  addfeedback(newfeedback)

}





 settext('')
}


}



  return (
    <Card>
<form onSubmit={handlesubmit}>
<h2>
How would you rate your service 
with  us ?
</h2>
<Ratingselect select={(rating)=>setrating(rating)} />
<div className='input-group'>
<input onChange={handletextchange} type='text' placeholder=' write a review '

value={text}
/>
<Button type='submit'  isDisabled={btndisabled}>
    Send</Button>
</div>

{message && <div className='message'> {message}</div>}

</form>

    </Card>
   
  )
}

export default Feedbackform
