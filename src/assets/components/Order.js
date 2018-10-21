import React from "react"

import {connect} from "react-redux"

class Order extends React.Component{
    render(){
        let {order,remove} = this.props
        return (
            <React.Fragment>
                <header data-am-widget="header" className="am-header am-header-default header">
                    <div className="am-header-left am-header-nav">
                        <a href="javascript:;" className="" onClick={()=>{this.props.history.go(-1)}}> 
                        <i className="am-header-icon am-icon-angle-left"></i>
                        </a>
                    </div>
                    <h1 className="am-header-title"> <a href="#title-link" className="" style={{color: "#333"}}>全部订单</a></h1>
                    <div className="am-header-right am-header-nav">
                        <a href="#right-link" className=""> </a>
                    </div>
                </header>
                <div className="cate-search" style={{position: "relative",top: 0, borderBottom: 0}}>
                    <input type="text" className="cate-input" placeholder="搜索全部订单" />
                    <input type="button" className="cate-btn" />
                </div>
                {order.map((item,index)=>(
                    <React.Fragment key={item.id}>
                        <div className="c-comment">
                            <span className="c-comment-num">订单编号：{item.order}</span>
                            <span className="c-comment-suc">待付款</span>
                        </div>
                        <div className="c-comment-list" style={{border: 0}}>
                            <a className="o-con" href="javascript:;">
                                <div className="o-con-img"><img src={item.image} /></div>
                                <div className="o-con-txt">
                                    <p>{item.name}</p>
                                    <p className="price">￥{item.price}</p>
                                    <p>合计：<span>￥{(item.price*item.num).toFixed(2)}</span></p>
                                </div>
                                <div className="o-con-much"> <h4>x{item.num}</h4></div>
                            </a>
                        </div>
                        <div className="c-com-btn">
                            <a href="javascript:;">立即支付</a>
                            <a href="javascript:;" onClick={remove.bind(null,index)}>取消订单</a>
                        </div>
                        <div className="clear"></div>
                    </React.Fragment>
                ))}
            </React.Fragment>
        )
    }
}

let stateToProps = (state,props)=>(
    {
      order:state.order
    }
  )
  let dispatchToProps = (dispatch,props)=>(
    {
        remove:(index)=>{dispatch({type:"remove",payload:index})}
    }
  )
  
  export default connect(stateToProps,dispatchToProps)(Order);