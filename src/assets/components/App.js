import React, { Component } from 'react';
import Loadable from "react-loadable"
import anysc from "../common/loadable"

import {Route,Redirect,Switch} from "react-router-dom"
import {connect} from "react-redux"

import Home from "./Home";
import Speak from "./Speak";
// import Member from "./Member";
let Member = Loadable({
  loader:()=>import("./Member"),
  loading:()=>{return null}
})
let We = Loadable({
  loader:()=>import("./We"),
  loading:Loading
})
// import We from "./We";
import Footer from "./Footer";
// import Search from "./Search";
let Search = anysc({
  loader:()=>import("./Search")
})
import Talk from "./Talk";
import Detail from "./Detail";
import Content from "./Content";
import Address from "./Address";
import Order from "./Order";
import Login from "./Login";
import Loading from "./Loading";
import Reg from "./Reg";
import AuthUser from "../guide/AuthUser";

class App extends Component {
  // componentWillReceiveProps(nextProps){//props发生变化时
  //   //nextProps 变化后的props 
  //   //this.props 当前props
  //   if(this.props.location!==nextProps.location){
  //     window.scrollTo(0,0);
  //   }
  // }
  render() {
    let {bNav,location,revNav,bLoading} = this.props;
    let path = location.pathname;
    if (/\/detail|\/search|\/content|\/address|\/login|\/register|\/order|\/talk/.test(path)) {
      setTimeout(() => {
        revNav(false)
      }, 0);
    }else{
      setTimeout(() => {
        revNav(true)
      }, 0);
    }

    return (
      <div className="App">
        {bLoading&&<Loading/>}
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/speak" component={Speak}></Route>
          <Route path="/we" component={We}></Route>
          <Route path="/member" component={Member}></Route>
          <Route path="/talk" component={Talk}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/content" component={Content}></Route>
          <AuthUser path="/address" component={Address}></AuthUser>
          <AuthUser path="/order" component={Order}></AuthUser>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Reg}></Route>
          <Redirect from="/" to="/home" exact></Redirect>
        </Switch>
        {bNav&&<Footer></Footer>}
      </div>
    );
  }
}

let stateToProps = (state,props)=>(
  {
    bNav:state.bNav,
    bLoading:state.bLoading,
  }
)
let dispatchToProps = (dispatch,props)=>(
  {
    revNav:(payload)=>{dispatch({type:"change_Nav_State",payload})}
  }
)

export default connect(stateToProps,dispatchToProps)(App);
