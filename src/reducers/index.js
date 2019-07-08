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
   const cartList=[] 
const shopList=(state=products,action)=>{
    return state;
}
const addCart =(state=cartList, action)=>{
    let flag=0;
    if(action.type==='ADD_CART'){
        if(state.length>0){
            for( let i=0;i<state.length;i++  ){
                if(state[i].name===action.payload.name){
                    state[i].quantity++;
                    flag=1;
                    break;
                }
            } 
            if(flag===0){
                action.payload.quantity=1;
                state=[...state,action.payload];
            }
        }
        if(state.length===0){
            action.payload.quantity=1;
            state=[...state,action.payload];
        }
    }
    if(action.type==="REMOVE_CART"){
        if(state.length===0) alert('please add to cart first');
        for(let i=0;i<state.length;i++){
            if(state[i].name===action.payload.name){
                if(state[i].quantity>1)
                    state[i].quantity--;
                else{
                   state.splice(i);
                }
                break;
            }
            else{
                alert('please add to cart first');
            }
        }
    }
    console.log(state);
    return state;
}



export default combineReducers({
    cartList:addCart,
    shopList:shopList
})
