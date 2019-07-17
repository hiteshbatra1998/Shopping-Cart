import {combineReducers} from 'redux';


   const products=[
        {id:1, name: 'Cat Tee Black T-Shirt'  , size: 'M S' , freeShipping:true , price:'$1' , link:require('../images/1.jpg') },
        {id:2, name: 'Dark Thug Blue-Navy T-Shirt'  , size: 'M S' , freeShipping:true , price:'$2' , link:require('../images/1.jpg') },
        {id:3, name: 'Wine Skul T-Shirt'  , size: 'M S' , freeShipping:true , price:'$3' , link:require('../images/1.jpg') },
        {id:4, name: 'White DGK Script Tee'  , size: 'M S' , freeShipping:true , price:'$4' , link:require('../images/1.jpg') },
        {id:5, name: 'Tso 3D Black T-Shirt'  , size: 'M S' , freeShipping:true , price:'$5' , link:require('../images/1.jpg') },
        {id:6, name: 'Crazy Monkey Grey'  , size: 'M S' , freeShipping:true , price:'$6' , link:require('../images/1.jpg') },
        {id:7, name: 'On The Streets Black T-Shirt'  , size: 'M S' , freeShipping:true , price:'$7' , link:require('../images/1.jpg') },
        {id:8, name: 'Man Tie Dye Cinza Grey T-Shirt'  , size: 'M S' , freeShipping:true , price:'$8' , link:require('../images/1.jpg') },
        {id:9, name: 'Danger Knife Gre'  , size: 'M S' , freeShipping:true , price:'$9' , link:require('../images/1.jpg') }
   ]
   const cartList=[]
   const show=false 
   const showPop=false
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
const addCart =(state=cartList, action)=>{
    let flag=0;
    state=[].concat(state)
    if(action.type==='ADD_CART'){
        if(state.length>0){
            for( let i=0;i<state.length;i++  ){
                if(state[i].id===action.payload.id){
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
            for(let i=0;i<state.length;i++){
                if(state[i].id===action.payload.id){
                    if(state[i].quantity>1){ 
                        state[i].quantity--;
                    }
                    else{   
                        state.splice(i,1)
                    }
                    break;
                }
            }
        }
    return state;
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

export default combineReducers({
    cartList:addCart,
    shopList:shopList,
    showCart:showCart,
    showPop:ManagePopup
})
