import React from 'react';
import '../style.css';
import {connect} from 'react-redux';
import {AddCart , RemoveCart} from '../actions';
class ShopView extends React.Component{
    
    renderList(){
        return this.props.list.shopList.map( (product)=>{
            return <div className="col-md-3 col-sm-4 col-12 " key={product.id}>
                        <div className="productView">
                            <div className="pro-image-div"> <img className="pro-image" src={product.link} alt={product.name} /></div>
                            <div className="productName">{product.name}</div>
                            <div>{product.price}</div>
                            <div className="addCart"><div onClick={()=>this.props.AddCart(product)} >Add to cart</div></div>
                            
                        </div>
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
