import React from "react"

import {Link} from "react-router-dom"

class List extends React.Component{
	render(){
		let {list} = this.props;
		return (
			<ul data-am-widget="gallery" className="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
				{list.map((item,index)=>(
					<li key={item.id}>
						<div className="am-gallery-item">
							<Link to={"/detail/"+index}>
								<img src={item.image}  alt=""/>
								<h3 className="am-gallery-title">{item.name}</h3>
								<div className="am-gallery-desc">
									<em>￥{item.price}</em><i className="am-icon-cart-plus"></i>
								</div>
							</Link>
						</div>
					</li>
				))}
			</ul>
		)
	}
	componentDidMount(){
		window.scrollTo(0,0)
	}
}

export default List;