import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class About extends Component{
    render(){
        return(

            <div >
<Header />
<div className='about' >
    <h1>About Us</h1>
        This is Just a website for Todo list..
        Once you type something in the Input of the home page and click save...It saves and come up as a card underneath..<br/>Note that I'm not talking about the playing card, I'm talking about the card shape that will show under with the things You typed on it...

</div>
         <Footer />
            </div>
        )
    }
}
export default About;