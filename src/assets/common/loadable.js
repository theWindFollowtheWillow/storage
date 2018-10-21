import React from "react"
export default (options)=>{
    class Component extends React.Component{
        constructor(props){
            super(props);
            this.state={
                component:null
            }
        }
        render(){
            const C = this.state.component;
            return C?<C {...this.props}/>:null;
        }
        async componentDidMount(){
            const {default:component} = await options.loader()
            this.setState({component:component})
        }
    }
    return Component;
}