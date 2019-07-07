import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class Faq extends Component{
    render(){
        return(
            <div >
<Header />
<div className='Faq'>
                <ol>
                    <li>Is the todo saving to locastorage?<br/>
                    Ans- No</li><hr/>
                    <li>Is the registration and login authenticating from Localstorage?<br/>Ans-Yes</li><hr/>
                    <li>How many components are you using for this website?<br/>Ans-Over 10 components</li>
                </ol>

</div>
         <Footer />
            </div>
        )
    }
}
export default Faq;