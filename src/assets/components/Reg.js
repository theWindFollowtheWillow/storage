import React from "react"

import Header from "./Header"
import "../css/login.css"

import {connect} from "react-redux"
import {register} from "../store/actions"

class Reg extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header></Header>
                <div className="login">
                    <h1>注册</h1>
                    <p>用户名:
                        <input type="text" name="username" ref="username" id="username"/>
                    </p>
                    <p>密码：
                        <input type="password" name="password" ref="password" id="password"/>
                    </p>
                    <p>手机号：
                        <input type="text" name="tel" ref="tel" id="tel"  />
                    </p>
                    <input type="button" value="注册" onClick={()=>{this.props.reg(this.refs.username.value,this.refs.password.value,this.refs.tel.value)}}/>
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
      reg:(name,pass,tel)=>{register({
        dispatch,
        url:"http://localhost:3000/register?username="+name+"&password="+pass+"&tel="+tel,
        type:"change_user",
        props
      })}
    }
  )

export default connect(stateToProps,dispatchToProps)(Reg);