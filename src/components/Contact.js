import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class Contact extends Component{
    render(){
        return(
            <div >
<Header />
<div className='contact'>
                This is the contact us section of the page<br/>
                <h3>Why you need my contact??? <br/>Na my contact be Todo list wey you wan create?</h3>

</div>
         <Footer />
            </div>
        )
    }
}
export default Contact;