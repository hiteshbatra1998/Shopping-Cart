export const AddCart=(product)=>{
    return {
        type:'ADD_CART',
        payload:product 
    }
}

export const RemoveCart=(product)=>{
    return {
        type:'REMOVE_CART',
        payload:product
    }
}

export const showCart=()=>{
    return {
        type:'SHOW_CART'
    }
}
export const hideCart=()=>{
    return {
        type:'HIDE_CART'
    }
}

export const showPopup=()=>{
    return {
        type:'SHOW_POP'
    }
}
export const hidePopup=()=>{
    return {
        type:'HIDE_POP'
    }
}
export const showDescription=(product)=>{
    return {
        type:'SHOW_DESC',
        payload:product
    }
}
export const hideDescription=()=>{
    return {
        type:'HIDE_DESC'
    }
}
