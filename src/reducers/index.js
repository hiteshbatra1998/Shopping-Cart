import {combineReducers} from 'redux';

const products=[
        { name: 'a'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'b'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'c'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'd'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'e'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'f'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'g'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'h'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') },
        { name: 'i'  , size: 'M S' , freeShipping:true , price:'$12' , link:require('../images/1.jpg') }
           
]
const cartList=[
     {}
]
const shopList=(state=products,action)=>{
    return state;
}
const addCart =(state=cartList, action)=>{
    return state;
}
export default combineReducers({
    cartList:addCart,
    shopList:shopList
})