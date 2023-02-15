import React from "react"

export default class NameAndRole extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="NameAndRole">
            <h1 className="firstName">AMOGELANG</h1>
            <h1 className="lastName">CHAANE</h1>
            <h4 className="role">WEB DEVELOPER</h4>
        </div>
    }
}