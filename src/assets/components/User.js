import React from "react"

import {connect} from "react-redux"

let User =  props=>(
    <div className="member">
        <div className="member-pic">
            <img src={props.user.img?props.user.img:'/images/default_photo.png'} /> 
        </div>
        <div className="member-infor">{props.user.tel}</div>
        <div className="member-infor"><a href="javascript:;" onClick={()=>{props.exit()}}>退出</a></div>
    </div>
)

let stateToProps = (state,props)=>(
    {
      user:state.user.data
    }
  )
  let dispatchToProps = (dispatch,props)=>(
    {
        exit:()=>{dispatch({type:"exit"})}
    }
  )
  
  export default connect(stateToProps,dispatchToProps)(User);