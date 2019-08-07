import React from 'react'
import {connect} from 'react-redux'

class AvailableColrs extends React.Component{
    render(){
        return (
            <div >
                <div id="avilable-color">AVAILABLE COLORS</div>
                <div id="available-color-main-div">
                    <div className="avilable-img-div"><img className="different-img" src={this.props.link} alt='different-img' /></div>
                    <div className="avilable-img-div"><img className="different-img" src={this.props.link} alt='different-img' /></div>
                    <div className="avilable-img-div"><img className="different-img" src={this.props.link} alt='different-img' /></div>
                    <div className="avilable-img-div"><img className="different-img" src={this.props.link} alt='different-img' /></div>
                    <div className="avilable-img-div"><img className="different-img" src={this.props.link} alt='different-img' /></div>
               
                </div>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return {
        link:state.showProduct.link 
    }
}
export default connect(mapStateToProps)(AvailableColrs)
