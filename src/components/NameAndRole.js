import React from "react"

export default class NameAndRole extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div className="NameAndRole section">
            <div className="overlay">
                <p>EDIT</p>
            </div>
            <h1 className="firstName">{this.props.state.names.firstName.toUpperCase()}</h1>
            <h1 className="lastName">{this.props.state.names.lastName.toUpperCase()}</h1>
            <div className="role-line">
                <div></div>
                <h4 className="role">{this.props.state.role.toUpperCase()}</h4>
            </div>
        </div>
    }
}