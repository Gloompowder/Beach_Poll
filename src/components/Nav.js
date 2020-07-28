import React from 'react';


class Nav extends React.Component{
    /**
     * TODO:
     * For each div below, decide if it should navigate the user to a specific page
     * Then, use the tools from React Router so when the user clicks on the text, it navigates them to that path
     */
    conditionalWelcome=()=>{
        return(this.props.user.name ?
            <ul className="Nav">
                <li onClick={this.props.changeAbout}>Welcome, {this.props.user.name} </li>
                <li onClick={this.props.changeProfile}>Profile</li>
                <li onClick={this.props.changeBeach}>Beach</li>
                <li onClick={this.props.changeContact}>Contact</li>
                <li onClick={this.props.pseudoLogout}>Logout</li>
            </ul>:
            <ul className="Nav">
                <li>Welcome, Guest</li>
                <li>Profile</li>
                <li>Beach</li>
                <li>Contact</li>
                <li>Login/Signup</li>
            </ul>
        )
    }

render(){
    return (
        <div className="simple-flex-row">
            <ul>
                {this.conditionalWelcome()}
            </ul>
        </div>
    )
}}

export default Nav;