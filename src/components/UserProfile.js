import React from 'react'
import UserReview from './UserReview'

function sum(array){
    array.reduce((a, b) => a + b, 0)
}



class UserProfile extends React.Component{
    state={
        myReviews: false,
        editProfile: false
    }

    toggleReviews=(event)=>{
        event.preventDefault()
        this.state.myReviews === false ? this.setState({...this.state, myReviews: true}) : this.setState({...this.state, myReviews: false})
    }

    toggleEdit=(event)=>{
        event.preventDefault()
        this.state.editProfile === false ? this.setState({...this.state, editProfile: true}) : this.setState({...this.state, editProfile: false})
    }

    conditionalReviews=()=>{
        return(this.state.myReviews === false ? <button onClick={this.toggleReviews}>My Reviews</button>: 
            <div>
            <h1>My Reviews</h1>
        <button onClick={this.toggleReviews}>Back</button>
            </div>)
    }

    conditionalEdit=()=>{
        return(this.state.myReviews === false? <button onClick={this.toggleEdit}> Edit Profile </button>:
            <div>
                <button>Back</button>
            </div>)
    }

    render(){console.log(this.props)
        return(
            <div className="profile">
                <h3>{this.props.user.name}</h3>
                <h3>{this.props.user.username}</h3>
                <h5>Age: {this.props.user.age}</h5>
                <h5>Email: {this.props.user.email}</h5>
                <h5>Phone: {this.props.user.phone}</h5>
                {/* <h5>Number of Reviews:{this.props.currentUserReviews.length()}</h5>
                <h5>Total Upvotes: {sum(this.props.currentUserReviews.map(review => review.upvote))}</h5> */}
                {/* {this.currentUserReviews().map(review =><UserReview 
                    picture={review.picture}
                    comment={review.comment}
                    upvote={review.upvote}
                    comment={review.comment}
                    airpollution={review.airpollution}
                    noisepollution={review.noisepollution}
                    waterpollution={review.waterpollution}
                    plasticpollution={review.plasticpollution}
                    foottraffick={review.foottraffick}
                    />
                )} */}
            </div>
        )

    }
}
export default UserProfile