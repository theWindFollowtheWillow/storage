import React from "react"

import Header from "./Header"

class Talk extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Header></Header>
                <div className="communityPage-main">
                    <div className="communityPage-info">
                        <img className="communityPage-img" src="/images/detail.png" />
                        <div>
                            <p className="communityPage-title"> 饮食健康</p>
                            <p className="communityPage-num"><label>话题<span className="communityPage-topic-num cmn-theme-color">0</span></label><label>回复<span className="communityPage-comment-num cmn-theme-color">0</span></label></p>
                        </div>
                    </div>
                    <div className="communityPage-topic cmn-theme-color-active" id="communityPage-topic"><a className="active">全部</a></div>
                </div>
                <div className="nokeshuo">
                    <img src="/images/none.png" />
                    <p>还没话题，快来说两句</p>
                </div>
                <div className="communityPage-publish-btn cmn-theme-bgcolor" id="communityPage-publish-btn"><span>发帖</span></div>
            </React.Fragment>
        )
    }
}

export default Talk;