import React from 'react';
import ShopView from './ShopView';
import ShowCart from './ShowCart';
import Cart from './Cart';
import ProductDescription from './ProductDescription';
import {connect} from 'react-redux';
class App extends React.Component{
    
    showCart(){
        if(this.props.showCart){
            return<Cart />
        }
        else{
            return <ShowCart />
        }
    }
    showDesc(){
        if(this.props.showDesc){
            var x=document.getElementById('main-body')
            // var y=document.getElementsByClassName('addCart')
            // var z=document.getElementsByClassName('pro-image')
            var u=document.getElementById('productModal');
            if(u!=null){    u.classList.add('productModalOpening')
            u.classList.remove('productModalClosing')}
            x.classList.add('bodyOpacity')
            // for(let i=0;i<y.length;i++){
            //     y[i].classList.add('modalAnimate')
            // }
            // for(let i=0;i<z.length;i++){
            //     z[i].classList.add('modalAnimate')
            // }
            return <ProductDescription/>
        }
        else{
             x=document.getElementById('main-body')
            // var y=document.getElementsByClassName('addCart')
            // var z=document.getElementsByClassName('pro-image')
            if ( x!=null){    
                x.classList.remove('bodyOpacity')
                // for(let i=0;i<y.length;i++){
                //     y[i].classList.remove('modalAnimate')
                //     y[i].classList.add('modalAnimateClose')
                // }
                // for(let i=0;i<z.length;i++){
                //     z[i].classList.remove('modalAnimate')
                // }
            }
             u=document.getElementById('productModal');
            if(u!=null){
                u.classList.remove('productModalOpening')
                u.classList.add('productModalClosing')
                return <ProductDescription/>
            }
           
        }
    }
    render(){
        return <div id="main-body">
                    <div >
                        <ShopView /> 
                        {this.showCart()}
                    </div>
                   {this.showDesc()}
                
                </div>
    }
}
const mapStateToProps=(state)=>{
    return {
        showCart:state.showCart,
        showPop:state.showPop,
        showDesc:state.showDesc
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        //hideCart: ()=>dispatch(hideCart()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
