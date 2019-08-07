import React from 'react'
import Dropdown from 'react-dropdown'
import {connect} from 'react-redux'
import {AddProduct , showPopup, hidePopup} from '../actions'
import 'react-dropdown/style.css'
class SizeQuantity extends React.Component{
    
    changeQuant=(event)=>{
        this.props.currentlySelected.quantity=event.value
    }
    changeSize=(event)=>{
        this.props.currentlySelected.sizeSelected=event.value
    }
    render(){
        
        if( this.props.add){
            this.props.addToCart(this.props.currentlySelected)
            this.props.showPop()
            setTimeout( ()=>{this.props.hidePop()},1500 )
        }
        const options = []
        for( let i=1;i<this.props.max;i++){
            options.push(i)
        }
        let sizeAvailable=[]
        let flag=0
        for(let i=0;i<this.props.size.length;i++){
            if(this.props.size[i]!==' '){
                if(flag===0){
                    sizeAvailable.push(this.props.size[i])
                    flag=1;
                }
                else{
                    let j=sizeAvailable.length-1;
                    sizeAvailable[j]+=this.props.size[i]
                }
            }
            if(this.props.size[i]===' '){
                flag=0;
            }
        }
        return (
         <div id="main-size-add-div">   
            <div id="size-quant-div">
                <div className="dropdown-quantity">
                    <Dropdown id="dropdown" options={options} onChange={this.changeQuant}  placeholder="Select Quantity" />
                </div>
                <div className="dropdown-size">
                    <Dropdown options={sizeAvailable} onChange={this.changeSize}  placeholder="Select Size" />
                </div>
            </div>
           
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        max:state.showProduct.atmax,
        size:state.showProduct.size,
        currentlySelected:state.showProduct,
        add:state.addCart
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addToCart:product=>dispatch( AddProduct(product) ),
        showPop:()=>dispatch( showPopup() ),
        hidePop:()=>dispatch(hidePopup() )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SizeQuantity)
