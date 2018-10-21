import React from "react"

import {Link} from "react-router-dom"
import {connect} from "react-redux"

import User from "./User"
import LogReg from "./LogReg"

class Member extends React.Component{
    render(){
        return (
            <React.Fragment>
                {this.props.auth?<User></User>:<LogReg></LogReg>}
                <ul className="member-nav">
                    <li><Link to="/address"><i className="am-icon-map-marker"></i><span>收货地址</span></Link></li>
                    <li><Link to="/order"><i className="am-icon-newspaper-o"></i><span>我的订单</span></Link></li>
                    <li><a href="javascript:;"><i className="am-icon-cart-arrow-down"></i><span>购物车</span></a></li>
                    <li><a href="javascript:;"><i className="am-icon-bell-o"></i><span>系统通知</span></a></li>
                    <li><a href="javascript:;"><i className="am-icon-credit-card"></i><span>会员卡</span></a></li>
                    <li><a href="javascript:;"><i className="am-icon-cc-mastercard"></i><span>优惠券</span></a></li>
                    <li><a href="javascript:;"><i className="am-icon-dollar"></i><span>积分</span></a></li>
                </ul>
                <ul className="member-nav mt">
                    <li><a href=""><i className="am-icon-phone"></i>联系我们</a></li>
                </ul>
            </React.Fragment>
        )
    }
    componentDidMount(){
		window.scrollTo(0,0)
	}
}

let stateToProps = (state,props)=>(
    {
        auth:state.user.auth,
        user:state.user
    }
  )
  let dispatchToProps = (dispatch,props)=>(
    {
    }
  )
  
  export default connect(stateToProps,dispatchToProps)(Member);