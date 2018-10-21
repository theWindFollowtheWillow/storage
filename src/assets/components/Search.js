import React from "react"

import {getData} from "../store/actions"
import {connect} from "react-redux"

import Header from "./Header"
import List from "./List"

class Search extends React.Component{
    constructor(props){
        super();
        props.getList(props.list)
    }
    render(){
        let {list} = this.props
        return (
            <React.Fragment>
                <Header></Header>
                <div className="search-input">
                    <input type="text" placeholder="请输入您搜索的内容" />
                </div>
                <ul className="paixu">
                    <li><a href="">默认</a></li>
                    <li><a href="">销量</a></li>
                    <li><a href="">价格</a></li>
                </ul>
                <List list={list}></List>
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
      getList:(list)=>{getData({
        dispatch,
        url:"http://localhost:3000/food?count=4",
        type:"change_List",
        arr:list,
      })}
    }
  )
  
  export default connect(stateToProps,dispatchToProps)(Search);