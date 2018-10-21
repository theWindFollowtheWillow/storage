import React from "react"

import {Link} from "react-router-dom"

class Footer extends React.Component{
    render(){
        return (
			<React.Fragment>
				<div className="h50"></div>
				<div data-am-widget="navbar" className="am-navbar am-cf am-navbar-default footer "  id="">
					<ul className="am-navbar-nav am-cf am-avg-sm-4">
						<li >
							<Link to="/home">
								<span className=""><img src="/images/nav.png"/></span>
								<span className="am-navbar-label">点餐</span>
							</Link>
						</li>
						<li >
							<Link to="/speak">
								<span className=""><img src="/images/nav2.png"/></span>
								<span className="am-navbar-label">客说</span>
							</Link>
						</li>
						<li >
							<Link to="/we/jieshao">
								<span className=""><img src="/images/nav3.png"/></span>
								<span className="am-navbar-label">我们</span>
							</Link>
						</li>
						<li >
							<Link to="/member">
								<span className=""><img src="/images/nav4.png"/></span>
								<span className="am-navbar-label">我的</span>
							</Link>
						</li>
					</ul>
				</div>
			</React.Fragment>
        )
    }
}

export default Footer;