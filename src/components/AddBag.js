import React from 'react'
import{connect} from 'react-redux'
import {AddCart} from '../actions'
class AddBag extends React.Component{
    render(){
        return(
            <div id="add-bag">Add To Bag</div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addCart:product=>dispatch( AddCart(product) )
    }
}
export default connect(null,mapDispatchToProps)(AddBag)
