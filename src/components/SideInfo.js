import React from "react"
import Address from "./Address";
import Skills from "./Skills";
import Education from "./Education";
import NameAndRole from "./NameAndRole";

export default class SideInfo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="sideInfo">
            <Address />
            <NameAndRole />
            <Education />
            <Skills />
            {/* <div className="sideInfo-innerContainer">
                <Address />
                <NameAndRole />
                <Education />
                <Skills />
            </div> */}
        </div>
    }
}