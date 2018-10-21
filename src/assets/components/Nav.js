import React, { Component } from 'react';

import {Link} from "react-router-dom" 

export default props=>(
    <ul className="nav">
        <li>
            <Link to="/search">
                <img src="/images/icon.jpg" />
                <p>最新推荐</p>
            </Link>
        </li>
        <li>
            <Link to="/search">
                <img src="/images/icon1.jpg" />
                <p>热门菜谱</p>
            </Link>
        </li>
        <li>
            <Link to="/search">
                <img src="/images/icon2.jpg" />
                <p>人气菜肴</p>
            </Link>
        </li>
        <li>
            <Link to="/search">
                <img src="/images/icon3.jpg" />
                <p>优惠券</p>
            </Link>
        </li>
    </ul>
)