import React from "react"
import "../css/logreg.css"

import {Link} from "react-router-dom"

export default props=>(
    <div className="member">
        <div className="member-infor"><Link to="/login"  >登录</Link></div>
        <div className="member-infor"><Link to="/register"  >注册</Link></div>
    </div>
)