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