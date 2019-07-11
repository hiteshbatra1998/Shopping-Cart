import React from 'react';
import '../style.css';
import {connect} from 'react-redux';
import {showCart} from '../actions';
class ShowCart extends React.Component{
    render(){
        return (
            <div id="showCart"> <button id="showCartBtn" onClick={ ()=>this.props.showCart() }> <img src={require('../images/cart.PNG')} /> </button></div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
     return {
        showCart: ()=>dispatch(showCart())
     }
}
// const mapstateToProps=(state)=>{
//     return {
//         list:state
//     }
// }
export default connect(null,mapDispatchToProps)(ShowCart);