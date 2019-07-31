import React from 'react'
import Dropdown from 'react-dropdown'
import {connect} from 'react-redux'
import 'react-dropdown/style.css'
class SizeQuantity extends React.Component{
    render(){
        const options = []
        for( let i=1;i<this.props.max;i++){
            options.push(i)
        }
        let sizeAvailable=[]
        let flag=0
        for(let i=0;i<this.props.size.length;i++){
            if(this.props.size[i]!=' '){
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
                    <Dropdown options={options} onChange={this._onSelect}  placeholder="1" />
                </div>
                <div className="dropdown-size">
                    <Dropdown options={sizeAvailable} onChange={this._onSelect}  placeholder="Select Size" />
                </div>
            </div>
           
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        max:state.showProduct.atmax,
        size:state.showProduct.size
    }
}
export default connect(mapStateToProps)(SizeQuantity)
