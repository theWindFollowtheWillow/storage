import React from "react"

import Slider from "./Slider"
import Snav from "./Snav"
import SpeakList from "./SpeakList"

class Speak extends React.Component{
    render(){
        return (
            <React.Fragment>
                <Slider></Slider>
                <Snav></Snav>
                <SpeakList></SpeakList>
            </React.Fragment>
        )
    }
    componentDidMount(){
		window.scrollTo(0,0)
	}
}

export default Speak;