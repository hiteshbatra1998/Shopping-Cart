import React from 'react'
import {connect} from 'react-redux'


class Slider extends React.Component{
    render(){
        return(
            <div id="slider-div">
                
                  <img className="image-slider" src={this.props.source}/>
                
            </div>

        )
    }
}
const mapStateToProps=(state)=>{
  return{
    source:state.showProduct.link
  }
}
export default connect(mapStateToProps)(Slider);
