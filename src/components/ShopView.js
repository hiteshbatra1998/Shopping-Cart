import React from 'react';
import '../style.css';
import {connect} from 'react-redux';
import {showDescription , showPopup} from '../actions';
class ShopView extends React.Component{
    // abc(pro){
    //     this.props.showPop();
    //     this.props.AddCart(pro);
    // }
    renderList(){
        return this.props.list.shopList.map( (product)=>{
            return <div className="col-md-3 col-sm-4 col-12 " key={product.id}>
                        <div className="productView">
                            <div className="pro-image-div"> <img className="pro-image" src={product.link} alt={product.name} /></div>
                            <div className="productName bounce">{product.name}</div>
                            <div><b>{product.price}</b></div>
                            <div className="addCart"><div onClick={ ()=>this.props.showDesc(product) } >Add to cart</div></div>
                            
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
        // AddCart: product=>dispatch( AddCart(product)),
        // RemoveCart: product=>dispatch( RemoveCart(product) ),
        showPop:()=>dispatch( showPopup() ),
        showDesc:product=>dispatch( showDescription(product) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopView);
