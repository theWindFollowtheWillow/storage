import React from "react"

import ReactSwipe from 'react-swipe';

export default (props)=>(
    <ReactSwipe className="carousel" swipeOptions={{
        auto:1000,
        speed:300,
        continuous:true,
        // transitionEnd:()=>{}
        }}>
        <div><img src="/images/banner.jpg" /></div>
        <div><img src="/images/banner1.jpg" /></div>
    </ReactSwipe>
)