import React from 'react';
import Rating from './Rating'
import AvailableColors from './AvailableColors'
import SizeQuantity from './SizeQunatity'
import AddBag from './AddBag'
import {connect} from 'react-redux'

class ProductDetail extends React.Component{
    render(){
        
        return(
            <div id="product-description">
                <div><Rating /></div>
                <div>
                    <div id="pro-display-name">{this.props.name}</div>
                    <div id="pro-display-price">{this.props.price}</div>
                </div>
                <div><AvailableColors /></div>
                <div><SizeQuantity /></div>
                <AddBag />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        name:state.showProduct.name,
        price:state.showProduct.price
    }
}
export default connect(mapStateToProps)(ProductDetail);
