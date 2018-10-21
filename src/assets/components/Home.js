import React, { Component } from 'react';

import {Link} from "react-router-dom"
import {getData} from "../store/actions"
import {connect} from "react-redux"

import Slider from "./Slider";
import Nav from "./Nav";
import List from "./List";

class Home extends Component {
  constructor(props){
    super();
    props.getList(props.list)
  }
  render() {
    let {list} = this.props;
    return (
      <React.Fragment>
        <Slider></Slider>
        <Nav></Nav>
        <div data-am-widget="titlebar" className="am-titlebar am-titlebar-default title" >
          <h2 className="am-titlebar-title ">   积分菜品 </h2>
          <nav className="am-titlebar-nav">
              <Link to="/search">more &raquo;</Link>
          </nav>
        </div>
        <List list={list.slice(0,4)}></List>
      </React.Fragment>
    );
  }
  componentDidMount(){
		window.scrollTo(0,0)
	}
}

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
      arr:list,
    }
    )}
  }
)

export default connect(stateToProps,dispatchToProps)(Home);