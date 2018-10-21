import React from "react"
export default props=>(
    <header data-am-widget="header" className="am-header am-header-default header">
        <div className="am-header-left am-header-nav">
            <a href="javascript:;" className="" onClick={()=>{window.history.go(-1)}}> 
            <i className="am-header-icon am-icon-angle-left"></i>
            </a>
        </div>
        <h1 className="am-header-title"> <a href="#title-link" className="" style={{color:"#333"}}>厨房妈妈</a></h1>
        <div className="am-header-right am-header-nav">
            <a href="#right-link" className=""> </a>
        </div>
    </header>
)