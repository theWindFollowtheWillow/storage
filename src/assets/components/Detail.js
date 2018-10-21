import React from "react"
import Header from "./Header";

import {getData} from "../store/actions"
import {connect} from "react-redux"
let pos=0;
class Detail extends React.Component{
    constructor(props){
        super();
        props.getList(props.list)
    }
    render(){
        let id = this.props.match.params.id;
        let list = this.props.list;
        if (list.length>0) {
            let msg = list[id]
            let detail = msg.detail;
            return (
                // <div ref={node=>this.xx=node}>content</div>
                <React.Fragment>
                    <Header></Header>
                    <div className="detail">
                        <h2>{msg.name}</h2>
                        <div className="price">
                            <b>￥{msg.price}</b><span>（积分可抵扣5元）</span>
                        </div>
                        <div className="kucun">
                            <p>库存：1000</p>
                            <p>运费：免运费</p>
                        </div>
                    </div>
                    <div className="comment">
                        <h2>宝贝评价（0）</h2>
                        <ul>
                            <li><a hhref="">有图（0）</a></li>
                            <li><a hhref="">好评（0）</a></li>
                            <li><a hhref="">中评（0）</a></li>
                            <li><a hhref="">差评（0）</a></li>
                        </ul>
                    </div>
                    <div className="detail-con">
                        {detail.map((item,index)=>(
                            <p key={index}>{item}</p>
                        ))}
                        <img src="/images/banner.jpg" />
                    </div>
                    <div className="h50"></div>
                    <ul className="fixed-btn">
                        <li ><a href="" className="current" onClick={()=>{alert("请加入购物车后购买!")}}>立即购买</a></li>
                        <li><a href="javascript:;" onClick={this.add.bind(this,msg,id)}>加入购物车</a></li>
                    </ul>
                </React.Fragment>
            )
        }else{
            return null;
        }
    }
    componentWillUnmount(){
        // 记录 cookie，store，模块内部变量，类属性  pos
        // Detial.pos=document.documentElement.scrollTop;
        pos=document.documentElement.scrollTop;

        // this.xx.removeEventListener('scroll',this.fn.bind(this))
        
    }
    componentDidMount(){
        // 读取位置 设置
        window.scrollTo(0,pos)

        // this.xx.addEventListener('scroll',this.fn.bind(this))
        
    }
    fn(ev){
        // ev.target.clientHeight
        // ev.target.clientHeight

        // this.xx.scrollTop=pos;
    }
    add(msg,id){
        let {name,price,image} = msg
        var order = "";
        for (let i = 0; i < 12; i++) {
            order += Math.round(Math.random()*9+1);        
        }
        this.props.setShopping("setShopping",{name,price,id,num:1,image,order})
    }
}
// Detail.pos=0;
let stateToProps = (state,props)=>(
    {
    list:state.list
    }
)
let dispatchToProps = (dispatch,props)=>(
    {
    getList:(list)=>{getData({
        dispatch,
        url:"http://localhost:3000/food",
        type:"change_List",
        arr:list
    })},
    setShopping:(type,payload)=>{
        dispatch({type,payload})
    }
    }
)
  
  export default connect(stateToProps,dispatchToProps)(Detail);