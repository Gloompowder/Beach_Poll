import React from 'react';
import BeachIndex from './BeachIndex'
import UserProfile from './UserProfile'
import Contact from './Contact'
import About from './About'

class Home extends React.Component {
    renderView=()=>{
        if(this.props.view === "about"){
            return <About {...this.props}/>
        }else if(this.props.view === "beaches"){
            return <BeachIndex {...this.props}/>
        }else if(this.props.view === "profile"){
            return <UserProfile {...this.props}/>
        }else if(this.props.view === "contact"){
            return <Contact {...this.props}/>
        }
    }

    render(){
        return (
            <div className="home-background">
                {this.renderView()}
            </div>
        )
    }
    }

export default Home;