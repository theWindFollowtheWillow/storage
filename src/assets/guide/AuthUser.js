import React from "react"

import {connect} from "react-redux"
import {Route,Redirect} from "react-router-dom"

class AuthUser extends React.Component{
    render(){
        let {component:Component,user,...rest} = this.props
        return (
            <Route {...rest} render={(props)=>{
                return user.auth?
                <Component {...props}/>:
                <Redirect to="/login"/>
            }}>
            </Route>
        )
    }
}
let stateToProps = (state,props)=>(
    {
      user:state.user
    }
  )
  let dispatchToProps = (dispatch,props)=>(
    {
    }
  )
  
  export default connect(stateToProps,dispatchToProps)(AuthUser);