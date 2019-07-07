import React from 'react';
import style from '../style.css';
import {connect} from 'react-redux';
class ShopView extends React.Component{
    componentDidMount(){
        console.log(this.props.list);
    }
    renderList(){
        return this.props.list.shopList.map( (product)=>{
            return <div className="col-md-3 col-sm-4 col-12" key={product.name}>
                       <div> <img className="pro-image" src={product.link} alt={product.name} /></div>
                       <div>{product.name}</div>
                       <div>{product.price}</div>
                       <div><button>Add to cart</button></div>
                   </div>
        })
    }
    render(){
        return <div className="container"><div className="row">{this.renderList()} </div></div>
    }
}

const mapStateToProps=(state)=>{
    return {list:state}
}

export default connect(mapStateToProps)(ShopView);