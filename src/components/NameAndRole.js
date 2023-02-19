import React from "react"

export default class NameAndRole extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div className="NameAndRole section">
            <div className="overlay">
                <p onClick={() => {
                    this.props.click(['firstName', "lastName", 'role']);
                }}>EDIT</p>
            </div>
            <h1 className="firstName">{this.props.text('firstName').toUpperCase()}</h1>
            <h1 className="lastName">{this.props.text('lastName').toUpperCase()}</h1>
            <div className="role-line">
                <div></div>
                <h4 className="role">{this.props.text('role').toUpperCase()}</h4>
            </div>
        </div>
    }
}