import React from "react"
import Address from "./Address";
import Skills from "./Skills";
import Education from "./Education";
import NameAndRole from "./NameAndRole";

export default class SideInfo extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div className="sideInfo">
            <Address address={this.props.state} text={this.props.text} click={this.props.click}/>
            <NameAndRole state={this.props.state} text={this.props.text} click={this.props.click}/>
            <Education education={this.props.state.education} text={this.props.text} click={this.props.click}/>
            <Skills skills={this.props.state.skills} text={this.props.text} click={this.props.click}/>
            {/* <div className="sideInfo-innerContainer">
                <Address />
                <NameAndRole />
                <Education />
                <Skills />
            </div> */}
        </div>
    }
}