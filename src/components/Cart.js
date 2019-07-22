import React from 'react';
import '../style.css'
import {connect} from 'react-redux';
import {hideCart , RemoveCart} from '../actions'
class Cart extends React.Component{ 
    componentDidMount(){
        if(!this.props.showCart){
            var x=document.getElementById('cart')
            x.classList.add('removeAnimation')
        }
    }
    subtotal(){
        let subtotal=0
        this.props.cart.map( product =>{
            subtotal=subtotal+eval(product.price.slice(1))*product.quantity
        })
        return subtotal;
    }
    renderList(){
        return this.props.cart.map( (product) =>{
            var p= eval(product.price.slice(1))*product.quantity
           return <div className="cartList">
                        <div className="cartImgDiv"><img src={product.link} alt={product.name}/></div>
                        <div className="cartDesc">
                            <div>{product.name}</div>
                            <div className="cartquantity">Quantity | {product.quantity}</div>
                            <div className="cartquantity">{product.price}</div>
                        </div>
                        <div className="proPrice"> ${p} </div>
                        <div className="removePro" onClick={ ()=> this.props.RemoveCart(product) }>X</div>
                  </div>
        } )
    }
    render(){
        return (
           <div  id="cart">
               <div id="removeCart" onClick={()=>this.props.hideCart()}> X</div>
               <div id="mainCart"> {this.renderList()} </div>
               <div id="checkout"> 
                    <div id="price">
                        <div id="subtotal">
                            Subtotal
                        </div>
                        <div id="subprice">${this.subtotal()}</div>
                    </div>
                    <div id="check">CHECKOUT</div> 
                </div> 
           </div> 
            
        )
    }
} 
const mapDispatchToProps=(dispatch)=>{
    return {
       hideCart: ()=>dispatch(hideCart()),
       RemoveCart:(product)=>dispatch(RemoveCart(product))
    }
}
const mapStateToProps=(state)=>{
    return {
        cart:state.cartList,
        showCart:state.showCart
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
