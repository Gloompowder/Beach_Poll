import React from 'react'
import BeachReview from './BeachReview'

function sum(array){
    array.reduce((a, b) => a + b, 0)
}


class BeachShow extends React.Component{
    state={
        reviews: false,
        toggleReviewForm: false,
        airPollutionArray: [],
        plasticPollutionArray: [],
        lightPollutionArray: [],
        noisePollutionArray: [],
        waterPollutionArray: [],
        footTrafficArray: []
    }

    showForm=(event)=>{
        event.preventDefault()
        this.state.showForm===true?
        this.setState({...this.state, showForm: false}):
        this.setState({...this.state, showForm: true})
    }

    showFormRender=()=>{
        return(this.state.showForm === true ? "Back": "Create New Review")
    }

    conditionalState=()=>{
        {return(this.props.reviews.length > 0 ?
            this.props.reviews.map(review => this.setState({...this.state, footTrafficArray: [...this.state.footTrafficArray, review.footTraffic], plasticollutionArray: [...this.state.plasticollutionArray, review.plasticollution], lightPollutionArray: [...this.state.lightpollutionArray, review.lightpollution], noisePollutionArray: [...this.state.noisepollutionArray, review.noisepollution],waterPollution: [...this.state.waterpollutionArray, review.waterpollutionArray], airPollutionArray: [...this.state.airpollutionArray, review.airpollution]})):null
        )}
    }
    
    renderReviews=()=>{
        {return(this.state.reviews === false ?                 
        <div className="Show">
            <h1>{this.props.name}</h1>
            <h3>{this.props.location}</h3>
            <img src={this.props.picture} alt={this.props.name + ": " + this.props.location}/>
            {this.props.reviews.length ? 
            <div className="reviews info">
                <h5>Total Reviews: {this.props.reviews.length()}</h5>
                <p>Average Air Pollution Score: {this.state.airPollutionArray.sum()/this.props.reviews.length}</p>
                <p>Average Water Pollution Score: {this.state.waterPollutionArray.sum()/this.props.reviews.length}</p>
                <p>Average Plastic Pollution Score: {this.state.plasticPollutionArray.sum()/this.props.reviews.length}</p>
                <p>Average Noise Pollution Score: {this.state.noisePollutionArray.sum()/this.props.reviews.length}</p>
                <p>Average Light Pollution Score: {this.state.lightPollutionArray.sum()/this.props.reviews.length}</p>
                <p>Average Foot Traffic Score: {this.state.footTrafficArray.sum()/this.props.reviews.length}</p>
            </div>:
            <div className="reviews info">
                <h5>Total Reviews: 0</h5>
                <p>Average Air Pollution Score: N/A</p>
                <p>Average Water Pollution Score: N/A</p>
                <p>Average Plastic Pollution Score: N/A</p>
                <p>Average Noise Pollution Score: N/A</p>
                <p>Average Light Pollution Score: N/A</p>
                <p>Average Foot Traffic Score: N/A</p>
            </div>}
            <br></br>
            <button onClick={this.handleReview}>Reviews</button>
        </div>:
        <div>
            {this.state.showForm?
            <div>
                Create New Review
                <h4 >Air Pollution Levels:</h4><br></br>
                <select name="rating" id="rating" onChange={this.props.airPollutionSelect}> 
                    <option>Choose One:</option>
            {this.props.ratings.map((rating, index)=><option key={index} >{rating}</option>)}
                </select><br></br>
                <h4 >Foot Traffic Levels:</h4><br></br>
                <select name="rating" id="rating" onChange={this.props.footTrafficSelect}> 
                    <option>Choose One:</option>
            {this.props.ratings.map((rating, index)=><option key={index} >{rating}</option>)}
                </select><br></br>
                <h4 >Water Pollution Levels:</h4><br></br>
                <select name="rating" id="rating" onChange={this.props.waterPollutionSelect}> 
                    <option>Choose One:</option>
            {this.props.ratings.map((rating, index)=><option key={index} >{rating}</option>)}
                </select><br></br>
                <h4 >Noise Pollution Levels Levels:</h4><br></br>
                <select name="rating" id="rating" onChange={this.props.noisePollutionSelect}> 
                    <option>Choose One:</option>
            {this.props.ratings.map((rating, index)=><option key={index} >{rating}</option>)}
                </select><br></br>
                <h4 >Light Pollution Levels:</h4><br></br>
                <select name="rating" id="rating" onChange={this.props.lightPollutionSelect}> 
                    <option>Choose One:</option>
            {this.props.ratings.map((rating, index)=><option key={index} >{rating}</option>)}
                </select><br></br>
                <h4 >Plastic Pollution Levels:</h4><br></br>
                <select name="rating" id="rating" onChange={this.props.plasticPollutionSelect}> 
                    <option>Choose One:</option>
            {this.props.ratings.map((rating, index)=><option key={index} >{rating}</option>)}
                </select><br></br>
                <input type="text-area" value={this.props.newPicture} onChange={this.props.imageURLFunction} placeholder="Image URL"/><br></br>
                <input type="content" value={this.props.comment} onChange={this.props.commentText} placeholder="Comment"/><br></br>
                <input type="button" onClick={this.props.onPost} value="Submit" />
                <input type="button" onClick={this.showForm} value="Back"/>
                </div>:
                <input type="button" onClick={this.showForm} value="Submit a Review"/>
            }
            <h5>Reviews for {this.props.name}</h5>
            {this.props.reviews.map(review=> <BeachReview 
            picture={review.picture}
            comment={review.comment}
            upvote={review.upvote}
            comment={review.comment}
            airpollution={review.airpollution}
            noisepollution={review.noisepollution}
            waterpollution={review.waterpollution}
            plasticpollution={review.plasticpollution}
            foottraffick={review.foottraffick}
            review={review}
            />)}
            <button onClick={this.handleReview}>Back</button>
        </div>
        )}
    }

    handleReview=(event)=>{
        event.preventDefault()
        this.state.reviews===false ?this.setState({...this.state, reviews: true}):  this.setState({...this.state, reviews: false})
    }
    render(){
        return(
            <div className="BeachDiv">
                {this.renderReviews()}
            </div>
        )
    }
}

export default BeachShow