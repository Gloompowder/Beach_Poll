import React from 'react'

class BeachReview extends React.Component{
    conditionalReviews=()=>{
        return(!this.props.review ? <h1>There are currently no reviews for this beach. Please go ahead and make one.</h1> : 
            <div>
                <h4>{this.props.users.filter(user=> user.id !== this.props.review.user_id)[0].username}</h4>
                <h5>Air Pollution: {this.props.review.airpollution}</h5>
                <h5>Water Pollution: {this.props.review.airpollution}</h5>
                <h5>Plastic Pollution: {this.props.review.airpollution}</h5>
                <h5>Noise Pollution: {this.props.review.airpollution}</h5>
                <h5>Light Pollution: {this.props.review.airpollution}</h5>
                <h5>Foot Traffic: {this.props.review.airpollution}</h5>
                <h5>Upvotes: {this.props.review.upvote}</h5>
                {this.props.user.id !== this.props.review.user_id ? 
                <div>
                <button> Upvote </button>
                <button>Downvote</button>
                </div>:
                null}
            </div>
        )
    }
    render(){
        return(
            <div className="review">
                {this.conditionalReviews()}
            </div>
        )
    }
}

export default BeachReview