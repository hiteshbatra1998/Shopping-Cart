import {combineReducers} from 'redux';


   const products=[
        {id:1, rating:1.45 ,atmax:7, name: 'Cat Tee Black T-Shirt'  , size: 'M S XS' , freeShipping:true , price:'$1' , link:require('../images/1.jpg') },
        {id:2, rating:2.85 , atmax:10, name: 'Dark Thug Blue-Navy T-Shirt'  , size: 'M S XXL' , freeShipping:true , price:'$2' , link:require('../images/1.jpg') },
        {id:3, rating:3.05 , atmax:3, name: 'Wine Skul T-Shirt'  , size: 'M S' , freeShipping:true , price:'$3' , link:require('../images/1.jpg') },
        {id:4, rating:4.02 , atmax:7, name: 'White DGK Script Tee'  , size: 'M S' , freeShipping:true , price:'$4' , link:require('../images/1.jpg') },
        {id:5, rating:1.05 , atmax:3, name: 'Tso 3D Black T-Shirt'  , size: 'M S' , freeShipping:true , price:'$5' , link:require('../images/1.jpg') },
        {id:6, rating:0 ,atmax:9, name: 'Crazy Monkey Grey'  , size: 'M S' , freeShipping:true , price:'$6' , link:require('../images/1.jpg') },
        {id:7, rating:1.47 , atmax:6, name: 'On The Streets Black T-Shirt'  , size: 'M S' , freeShipping:true , price:'$7' , link:require('../images/1.jpg') },
        {id:8, rating:1.99 ,atmax:4, name: 'Man Tie Dye Cinza Grey T-Shirt'  , size: 'M S' , freeShipping:true , price:'$8' , link:require('../images/1.jpg') },
        {id:9, rating:3 ,atmax:8, name: 'Danger Knife Gre'  , size: 'M S' , freeShipping:true , price:'$9' , link:require('../images/1.jpg') }
   ]
   const cartList=[]
   const show=false 
   const showPop=false
   const showDesc=false
   const productDisplay=[]
   const addCart=false
const shopList=(state=products,action)=>{
    return state;
}
const showCart=(state=show, action)=>{
    if(action.type==="SHOW_CART"){
        state=true;
    }
    if(action.type==="HIDE_CART"){
        state=false;
    }
    return state;
}
const ManageCartList=(state=cartList,action)=>{
    let newState=state
    if(action.type==='ADD_PRODUCT'){
        newState.push(action.payload)
    }
    return newState;
}
const ManageCart=(state=addCart,action)=>{
    let newState=state
    if(action.type==='ADD_CART'){
        newState=true
    }
    if(action.type==='ADD_CART_TOGGLE')
        newState=false
    return newState
}
export const ManagePopup=(state=showPop,action)=>{
    let stat=state
    if(action.type==='SHOW_POP'){
        stat=true
    }
    if(action.type==='HIDE_POP'){
        stat=false
    }
    return stat;
}

export const ManageDescription =(state=showDesc,action)=>{
    let newState=state
    if(action.type==='SHOW_DESC'){
        newState=true
    }
    if(action.type==='HIDE_DESC'){
        newState=false
    }
    return newState
}
export const ManageProductDisplay=(state=productDisplay,action)=>{
    let newState=state
    if(action.type==='SHOW_DESC'){
        newState=action.payload
    }
    return newState
}
export default combineReducers({
    addCart:ManageCart,
    cartList:ManageCartList,
    shopList:shopList,
    showCart:showCart,
    showPop:ManagePopup,
    showDesc:ManageDescription,
    showProduct:ManageProductDisplay
})
