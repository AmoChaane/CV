import React from "react"
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Experience from "./Experience";

export default class MainInfo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="mainInfo">
            <PersonalInfo state={this.props.state} text={this.props.text} click={this.props.click}/>
            <Summary profile={this.props.state.profile} text={this.props.text} click={this.props.click}/>
            <Experience experience={this.props.state.experience} text={this.props.text} click={this.props.click}/>
        </div>
    }
}