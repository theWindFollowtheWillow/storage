import React from "react"

import {NavLink,Route} from "react-router-dom"

import Slider from "./Slider"
import Liuyan from "./Liuyan"
import Jieshao from "./Jieshao"

class We extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Slider></Slider>
                <div className="am-tabs qiehuan" data-am-tabs>
                    <ul className="am-tabs-nav am-nav am-nav-tabs">
                        <li><NavLink to="/we/jieshao" activeStyle={{border:0,color:"red",borderBottom:"1px solid red"}}>店铺介绍</NavLink></li>
                        <li><NavLink to="/we/liuyan"  activeStyle={{border:0,color:"red",borderBottom:"1px solid red"}}>建议留言</NavLink></li>
                    </ul>
                    <div className="am-tabs-bd">
                        <Route path="/we/jieshao" component={Jieshao}></Route>
                        <Route path="/we/liuyan" component={Liuyan}></Route>
                    </div>
                </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
		window.scrollTo(0,0)
	}
}

export default We;