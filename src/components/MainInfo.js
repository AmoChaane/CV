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
            <PersonalInfo state={this.props.state} />
            <Summary profile={this.props.state.profile} />
            <Experience experience={this.props.state.experience}/>
        </div>
    }
}