import React from "react"

import {Link} from "react-router-dom"

class SpeakList extends React.Component{
    render(){
        return (
            <div data-am-widget="intro" className="am-intro am-cf am-intro-default">
                <div className="am-intro-hd">
                    <h2 className="am-intro-title">功效</h2>
                </div>
                <div className="am-g am-intro-bd">
                    <Link to="/content">
                        <div className="am-intro-left am-u-sm-3"><img src="images/p.png"  /></div>
                        <div className="am-intro-right am-u-sm-9">
                            <h2>五种果汁喝出美丽</h2>
                            <p>吐血推荐5款让你喝出健康的果汁</p>
                            <div className="text">
                                <span className="fl">2017-5-23</span>
                                <span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="am-g am-intro-bd">
                    <Link to="/content">
                        <div className="am-intro-left am-u-sm-3"><img src="images/p.png"  /></div>
                        <div className="am-intro-right am-u-sm-9">
                            <h2>五种果汁喝出美丽</h2>
                            <p>吐血推荐5款让你喝出健康的果汁</p>
                            <div className="text">
                                <span className="fl">2017-5-23</span>
                                <span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="am-g am-intro-bd">
                    <Link to="/content">
                        <div className="am-intro-left am-u-sm-3"><img src="images/p.png"  /></div>
                        <div className="am-intro-right am-u-sm-9">
                            <h2>五种果汁喝出美丽</h2>
                            <p>吐血推荐5款让你喝出健康的果汁</p>
                            <div className="text">
                                <span className="fl">2017-5-23</span>
                                <span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="am-g am-intro-bd">
                    <Link to="/content">
                        <div className="am-intro-left am-u-sm-3"><img src="images/p.png"  /></div>
                        <div className="am-intro-right am-u-sm-9">
                            <h2>五种果汁喝出美丽</h2>
                            <p>吐血推荐5款让你喝出健康的果汁</p>
                            <div className="text">
                                <span className="fl">2017-5-23</span>
                                <span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default SpeakList;