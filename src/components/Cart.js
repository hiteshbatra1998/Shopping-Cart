import React from 'react';
import '../style.css'
import {connect} from 'react-redux';
import {hideCart} from '../actions'
class Cart extends React.Component{
    render(){
        return (
           <div>
               <div id="removeCart" onClick={()=>this.props.hideCart()}> X</div>
               <div id="cart"></div>
           </div> 
            
        )
    }
} 
const mapDispatchToProps=(dispatch)=>{
    return {
       hideCart: ()=>dispatch(hideCart())
    }
}
export default connect(null,mapDispatchToProps)(Cart);