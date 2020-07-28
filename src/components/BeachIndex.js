import React from 'react'
import BeachShow from './BeachShow'

// const images = new Array(
//     'https://dummyimage.com/1000x400/00ff00/ffffff',
//     'https://dummyimage.com/1000x400/0000ff/ffffff',
//     'https://dummyimage.com/1000x400/ffff00/ffffff',
//     'https://dummyimage.com/1000x400/ff0000/ffffff',
//   );
//       const slider = setInterval(function() {
//           document.getElementsByClassName('bg-img')[0].setAttribute('style', 'background-image: url("'+images[0]+'")');
//           images.splice(images.length, 0, images[0]);
//           images.splice(0, 1);
//         }, 3000);

class BeachIndex extends React.Component{
    state={
        beachForm: false
    }

    // beachFormToggle=(event)=>{event.preventDefault()
    //     this.state.beachform === false? 
    //     this.setState({beachForm: true}):
    //     this.setState({beachForm: false})} can be found on app.js

    beachRender=()=>{
        return(
            this.props.beaches ? this.props.beaches.map(beach=><BeachShow 
                key={beach.id}
                name={beach.name}
                location={beach.location}
                picture={beach.picture}
                reviews={this.props.reviews.filter(review => review.beach_id === beach.id)}
                user={this.props.user}
                beach={beach}
                commentText={this.props.commentText}
                imageURLFunction={this.props.imageURLFunction}
                onPost={this.props.onPost}
                airpollutionSelect={this.props.airPollutionSelect}
                waterPollutionSelect={this.props.waterPollutionSelect}
                plasticPollutionSelect={this.props.plasticPollutionSelect}
                noisePollutionSelect={this.props.noisePollutionSelect}
                lightPollutionSelect={this.props.lightPollutionSelect}
                footTrafficSelect={this.props.footTrafficSelect}
                airpollution={this.props.airpollution}
                waterpollution={this.props.waterpollution}
                lightpollution={this.props.lightpollution}
                noisepollution={this.props.noisepollution}
                plasticpollution={this.props.plasticpollution}
                foottraffick={this.props.foottraffick}
                ratings={this.props.ratings}
                newPicture={this.props.newPicture}
                users={this.props.users}
                />
                ): null
        )
    }

    // beachFormButton=()=>{
    //     return(this.state.beachForm === false ? 
    //         <button>Create Beach</button>:
    //         <div>
    //         <h4>New Beach</h4>
    //         <form></form>
    //         </div>)
    // } can be found on app.js

    
    render(){
        return(
            <div>
                <h1>Beaches</h1>
            <div className="BeachIndex">
                {this.beachRender()}
            </div>
            </div>
        )
    }
}

export default BeachIndex