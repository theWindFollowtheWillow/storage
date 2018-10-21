export default (state,action)=>{
    let {type,payload} = action;
    switch (type) {
        case "change_Nav_State":
            return Object.assign({},state,{bNav:payload})
        case "change_List":
            return Object.assign({},state,{list:payload})
        case "change_Address":
            return Object.assign({},state,{address:payload})
        case "change_Loading_State":
            return Object.assign({},state,{bLoading:payload})
        case "change_user":
            return Object.assign({},state,{user:{auth:true,data:payload}})
        case "exit":
            return Object.assign({},state,{user:{auth:false}})
        case "remove":
            let arr1 = [...state.order]
            arr1.splice(payload,1)
            return Object.assign({},state,{order:arr1})
        case "setShopping":
            let onOff = true;
            let arr2 = [...state.order]
            arr2.forEach((item) => {
                if (item.id==payload.id) {
                    item.num++
                    onOff = false;
                }
            });
            if (onOff) {
                arr2 = state.order.concat(payload)
            }
            return Object.assign({},state,{order:arr2})
        default:
            return state
    }
}