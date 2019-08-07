import React from 'react'
import{connect} from 'react-redux'
import {AddCart,AddCartToggle} from '../actions'
class AddBag extends React.Component{
    hide(){
        this.props.add()
        setTimeout( ()=>{ this.props.changeAddSTate() } ,1000 )
        
    }
    render(){
        return(
            <div id="add-bag" onClick={()=>this.hide()}>Add To Bag</div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        add:()=>dispatch( AddCart() ),
        changeAddSTate:()=>dispatch(AddCartToggle())
    }
}
export default connect(null,mapDispatchToProps)(AddBag);
