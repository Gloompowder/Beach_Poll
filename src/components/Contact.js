import React from 'react'

class Contact extends React.Component{
    state = {
        subject: '',
        content: '',
        email: '',
    }


    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        alert("Thanks for your question! We'll get back to you ASAP!")
            /** TODO: when the user submits the question, move them to our /pets page  */
    }

    render(){
        return(
            <div className="contact">
                <div className="contact-dev">
                    <h1>William Lin</h1>
                    <h4>Developer</h4>
                    <img alt="William Lin" src="https://media-exp1.licdn.com/dms/image/C4D03AQFCUK0JOHwfLA/profile-displayphoto-shrink_200_200/0?e=1600905600&v=beta&t=jd0pwQiudywGeyMc7acG1jmsqq-yz94ktqPboI5x0lo"/><br></br>
                    <p>A recent web developer bootcamp grad with experience in design.</p>
                    <button><a href="https://www.linkedin.com/in/william-l-198698b5/" target="_blank" rel="noopener noreferrer"/>Contact</button>
                    <h3>Submit a Question</h3>
                <input name="subject" placeholder="Subject" value={this.state.subject} onChange={this.handleChange}/><br></br>
                <textarea name="content" placeholder="Content" value={this.state.content} onChange={this.handleChange}/><br></br>
                <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/><br></br>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Contact