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
            <Address address={this.props.state.address}/>
            <NameAndRole state={this.props.state}/>
            <Education education={this.props.state.education} />
            <Skills skills={this.props.state.skills} />
            {/* <div className="sideInfo-innerContainer">
                <Address />
                <NameAndRole />
                <Education />
                <Skills />
            </div> */}
        </div>
    }
}