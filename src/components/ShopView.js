import React from 'react';
import '../style.css';
import {connect} from 'react-redux';
import {AddCart , RemoveCart} from '../actions';
class ShopView extends React.Component{
    
    renderList(){
        return this.props.list.shopList.map( (product)=>{
            return <div className="col-md-3 col-sm-4 col-12" key={product.name}>
                       <div> <img className="pro-image" src={product.link} alt={product.name} /></div>
                       <div>{product.name}</div>
                       <div>{product.price}</div>
                       <div><button onClick={()=>this.props.AddCart(product)} >Add to cart</button></div>
                       <div><button onClick={()=>this.props.RemoveCart(product)} >Remove from cart</button></div>
                   </div>
        })
    }
    render(){
        return <div className="container main-div">
                    <div className="row">{this.renderList()} </div>
                </div>
    }
}

const mapStateToProps=(state)=>{
    return {list:state}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        AddCart: product=>dispatch( AddCart(product)),
        RemoveCart: product=>dispatch( RemoveCart(product) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopView);
