import React from "react"

import {Link} from "react-router-dom"

export default props=>(
    <ul className="nav">
        <li>
            <Link to="/talk">
                <img src="/images/ms.jpg" />
                <p>美食快拍</p>
            </Link>
        </li>
        <li>
            <Link to="/talk">
                <img src="/images/cy.jpg" />
                <p>厨艺交流</p>
            </Link>
        </li>
        <li>
            <Link to="/talk">
                <img src="/images/mmp.jpg" />
                <p>妈妈派</p>
            </Link>
        </li>
        <li>
            <Link to="/talk">
                <img src="/images/ys.jpg" />
                <p>饮食健康</p>
            </Link>
        </li>
    </ul>
)