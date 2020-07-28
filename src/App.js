import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import LoginSignup from './components/LoginSignup'


const userURL="http://localhost:3000/api/v1/users"
const beachURL="http://localhost:3000/api/v1/beachslots"
const reviewURL="http://localhost:3000/api/v1/beachreviews"
const ratings=[0,1,2,3,4,5]

class App extends React.Component {
  state={
    currentUser:{},
    beaches:[],
    reviews:[],
    currentUserReviews:[],
    currentBeachReviews:[],
    view: "about",
    comment: "",
    newPicture: "",
    airpollution: null,
    waterpollution: null,
    plasticpollution: null,
    foottraffick:null,
    noisepollution: null,
    lightpollution:null,
    showForm:true,
    beachForm: false,
    users:[]
  }

commentText=(event)=>{
    event.preventDefault()
    this.setState({...this.state, comment: event.target.value})
}

imageURLFunction=(event)=>{
    event.preventDefault()
    this.setState({...this.state, newPicture: event.target.value})
}


onPost=(event)=>{
    event.preventDefault()
    console.log(this.props)
    return(this.props.user && this.props.beach?
    fetch(reviewURL,{
        method: "POST",
        headers:{"content-type":"application/json", "accept":"application/json"},
        body:JSON.stringify({user_id: this.props.user.id, 
          beachslot_id: this.props.beach.id, 
          airpollution: this.state.airpollution, 
          waterpollution: this.state.waterpollution, 
          plasticpollution: this.state.plasticpollution, 
          noisepollution: this.state.noisepollution, 
          lightpollution: this.state.lightpollution,
          foottraffick: this.state.foottraffick,
          comment: this.state.comment, 
          picture: this.state.newPicture,
          upvote: 0
          })
    })
    .then(r=>r.json())
    .then(data=>this.setState({...this.state, reviews: [...this.state.reviews, data]})): null)
  }

  airPollutionSelect=(event)=>{
      event.preventDefault()
      this.setState({...this.state, airpollution: event.target.value})
  }
  waterPollutionSelect=(event)=>{
      event.preventDefault()
      this.setState({...this.state, waterpollution: event.target.value})
  }
  lightPollutionSelect=(event)=>{
      event.preventDefault()
      this.setState({...this.state, lightpollution: event.target.value})
  }
  noisePollutionSelect=(event)=>{
      event.preventDefault()
      this.setState({...this.state, noisepollution: event.target.value})
  }
  footTrafficSelect=(event)=>{
      event.preventDefault()
      this.setState({...this.state, footTraffic: event.target.value})
  }
  plasticPollutionSelect=(event)=>{
    event.preventDefault()
    this.setState({...this.state, plasticPollution: event.target.value})
}



  componentDidMount(){
    fetch(userURL)
    .then(r=>r.json())
    .then(data=>this.setState({...this.state, users: data.user, currentUser: data[0].user, currentUserReviews:data[0].reviews}))
    fetch(beachURL)
    .then(r=>r.json())
    .then(dataset=>dataset.map(data=>this.setState({...this.state, beaches:[...this.state.beaches, data.beach], currentBeachReviews:[...this.state.reviews, data.reviews]})))
    fetch(reviewURL)
    .then(r=>r.json())
    .then(dataset=>this.setState({...this.state, reviews:dataset}))
  }

  changeAbout=(event)=>{
    event.preventDefault()
    this.setState({...this.state, view: "about"})
  }

  changeBeach=(event)=>{
    event.preventDefault()
    this.setState({...this.state, view: "beaches"})
  }

  changeProfile=(event)=>{
    event.preventDefault()
    this.setState({...this.state, view: "profile"})
  }

  changeContact=(event)=>{
    event.preventDefault()
    this.setState({...this.state, view: "contact"})
  }

  pseudoLogout=(event)=>{event.preventDefault()
  this.setState({
    ...this.state, currentUser: {}
  })}

  beachFormButton=()=>{
    return(this.state.beachForm === false ? 
        <button>Create Beach</button>:
        <div>
        <h4>New Beach</h4>
        <form></form>
        </div>)
  }


  beachFormToggle=(event)=>{event.preventDefault()
    this.state.beachForm === false? 
    this.setState({beachForm: true}):
    this.setState({beachForm: false})}

  render(){
    return (
      <div className="App">
        <Nav 
        user={this.state.currentUser}
        view={this.state.view}
        changeAbout={this.changeAbout}
        changeBeach={this.changeBeach}
        changeProfile={this.changeProfile}
        changeContact={this.changeContact}
        pseudoLogout={this.pseudoLogout}/> 
        {this.state.currentUser==={}? <LoginSignup />:
        <Home 
        allUsers={this.state.users}
        user={this.state.currentUser} 
        view={this.state.view}
        beaches={this.state.beaches}
        reviews={this.state.reviews}
        currentUserReviews={this.state.currentUserReviews}
        currentBeachReviews={this.state.currentBeachReviews}
        changeAbout={this.changeAbout}
        changeBeach={this.changeBeach}
        changeProfile={this.changeProfile}
        changeContact={this.changeContact}
        commentText={this.commentText}
        onPost={this.onPost}
        airpollutionSelect={this.airPollutionSelect}
        waterPollutionSelect={this.waterPollutionSelect}
        plasticPollutionSelect={this.plasticPollutionSelect}
        noisePollutionSelect={this.noisePollutionSelect}
        lightPollutionSelect={this.lightPollutionSelect}
        airpollution={this.state.airpollution}
        waterpollution={this.state.waterpollution}
        lightpollution={this.state.lightpollution}
        noisepollution={this.state.noisepollution}
        plasticpollution={this.state.plasticpollution}
        foottraffick={this.state.foottraffick}
        ratings={ratings}
        imageURLFunction={this.imageURLFunction}
        newPicture={this.state.newPicture}
        />}
      </div>
    );
  }
}

export default App;