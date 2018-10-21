import React,{Component} from "react"

import {getData} from "../store/actions"
import {connect} from "react-redux"

import Header from "./Header"
import AddressList from "./AddressList"

class Address extends Component{
    constructor(props){
        super();
        props.getAddress(props.address)
    }
    render(){
        return (
            <React.Fragment>
                <Header></Header>
                <AddressList address={this.props.address}></AddressList>
            </React.Fragment>
        )
    }
}

let stateToProps = (state,props)=>(
    {
      address:state.address
    }
  )
  let dispatchToProps = (dispatch,props)=>(
    {
      getAddress:(address)=>{getData({
        dispatch,
        url:"http://localhost:3000/address",
        type:"change_Address",
        arr:address
      }
      )}
    }
  )
  
  export default connect(stateToProps,dispatchToProps)(Address);