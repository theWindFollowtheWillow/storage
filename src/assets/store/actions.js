export const getData=({dispatch,url,type,arr,count})=>{
    if (arr.length==0) {
        dispatch({type:"change_Loading_State",payload:true})
        fetch(url).then(
            res=>res.json()
        ).then(
            data=>{
                dispatch({type:"change_Loading_State",payload:false})
                dispatch({type,payload:data})
            }
        )
    }
}

export const login=({dispatch,url,type,props})=>{
        dispatch({type:"change_Loading_State",payload:true})
        fetch(url,{
        }).then(
            res=>res.json()
        ).then(
            data=>{
                if (data.length>0) {
                    dispatch({type,payload:data[0]})
                    props.history.push("/member")
                }else{
                    alert("用户名或密码错误")
                }
                dispatch({type:"change_Loading_State",payload:false})
            }
        )
}
export const register=({dispatch,url,type,props})=>{
        dispatch({type:"change_Loading_State",payload:true})
        fetch(url,{
        }).then(
            res=>res.json()
        ).then(
            data=>{
                if (data.error==0) {
                    dispatch({type,payload:data.data})
                    props.history.push("/member")
                }else if(data.error==1&&data.state==0){
                    alert("数据库错误")
                }else if(data.error==1&&data.state==1){
                    alert("用户名已存在")
                }
                dispatch({type:"change_Loading_State",payload:false})
            }
        )
}