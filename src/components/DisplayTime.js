import React, {Component} from 'react'


class DisplayTime extends Component {
    render(){
let theTime = new Date();
let hours = theTime.getHours();
let minutes = theTime.getMinutes();
let seconds = theTime.getSeconds();
let amPm = hours>= 12 ? 'Pm' : 'Am';




        
   return(
            <div className='middle'>
                
{
hours == 0 ? 12 :
(hours > 12) ?
hours - 12 : hours
}
         :    
{  minutes > 9 ? minutes : `0${minutes}`}
    :
    {seconds > 9 ? seconds : `0${seconds}`}
     {amPm}

     <div className='roll'><p>Roll</p></div>
            </div>
        )
    }
}
export default DisplayTime;