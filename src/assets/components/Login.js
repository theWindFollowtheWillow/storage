import React from "react"

import Header from "./Header"
import "../css/login.css"

import {connect} from "react-redux"
import {login} from "../store/actions"

class Login extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header></Header>
                <div className="login">
                    <h1>登录</h1>
                    <p>用户名:
                        <input type="text" name="username" ref="username" id="username"/>
                    </p>
                    <p>密码：
                        <input type="password" name="password" ref="password" id="password"/>
                    </p>
                    <input type="button" value="登录" onClick={()=>{this.props.login(this.refs.username.value,this.refs.password.value)}}/>
                </div>
            </React.Fragment>
        )
    }
}

let stateToProps = (state,props)=>(
    {
      list:state.list
    }
  )
  let dispatchToProps = (dispatch,props)=>(
    {
      login:(name,pass)=>{login({
        dispatch,
        url:"http://localhost:3000/login?username="+name+"&password="+pass,
        type:"change_user",
        props
      })}
    }
  )

export default connect(stateToProps,dispatchToProps)(Login);