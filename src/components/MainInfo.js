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
            <PersonalInfo />
            <Summary />
            <Experience />
        </div>
    }
}