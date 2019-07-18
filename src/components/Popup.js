import React from 'react'
import {connect} from 'react-redux'
import {hidePopup} from '../actions'
class Popup extends React.Component{
    componentDidMount(){
        
        setTimeout(
            ()=> {this.props.hidePop()} , 
            1000);
    }
    render(){
        return <div id="popup">Product Added To Cart</div>
    }
}

const mapDisppatchToProps=(dispatch)=>{
    return{
        hidePop:()=>dispatch(hidePopup())
    }
}

export default connect(null,mapDisppatchToProps)(Popup);
