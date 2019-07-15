import React from 'react';
import '../style.css';
import {connect} from 'react-redux';
import {showCart} from '../actions';
class ShowCart extends React.Component{
    render(){
        return (
            <div id="showCart" onClick={ ()=>this.props.showCart()}> 
                <button id="showCartBtn"> 
                    <img src={require('../images/cart.PNG')} /> 
                </button>
                <div id="count">{this.props.count}</div>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
     return {
        showCart: ()=>dispatch(showCart())
     }
}
const mapStateToProps=(state)=>{
    return {
        count:state.cartList.length
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCart);
