import React from 'react';
import StarRatings from '../react-star-ratings'
import {connect} from 'react-redux'

class Rating extends React.Component{
    render(){
        return(
            <StarRatings
          rating={this.props.rating}
          starRatedColor="#E7711B"
          numberOfStars={5}
          name='rating'
          starDimension="30px"
          starSpacing="1px"
        />
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        rating:state.showProduct.rating
    }
}
export default connect(mapStateToProps)(Rating);
