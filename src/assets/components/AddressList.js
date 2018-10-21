import React,{Component} from "react"

class AddressList extends Component{
    render(){
        return (
            <ul className="address-list">
                {this.props.address.map((item,index)=>(
                    <li className="curr" key={index}>
                        <p>收货人：{item.receiver}&nbsp;&nbsp;{item.tel}</p>
                        <p className="order-add1">{item.address}</p>
                        <hr />
                        <div className="address-cz">
                            <label className="am-radio am-warning">
                                <input type="radio" name="radio3" data-am-ucheck="" defaultChecked={item.default} className="am-ucheck-radio" /><span className="am-ucheck-icons" ><i className="am-icon-unchecked"></i><i className="am-icon-checked"></i></span> 设为默认
                            </label>
                            <a href="javascript:;"><img src="/images/bj.png" style={{width: "18px"}} />&nbsp;编辑</a>
                            <a href="javascript:;">删除</a>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }
}

export default AddressList;