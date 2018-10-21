import React from "react"
export default (props)=>(
    <div className="am-tab-panel am-fade am-in am-active" id="tab2">
        <input type="text" placeholder="姓名" className="tab-input" />
        <input type="text" placeholder="电话" className="tab-input" />
        <textarea placeholder="建议" className="tab-input"></textarea>
        <button type="button" className="tab-btn">提交</button>
    </div>
)