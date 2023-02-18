import React from "react"

export default class Address extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="address section">
            <div className="overlay">
                <p onClick={event => console.log(event)}>EDIT</p>
            </div>
            <div className="address-icon-holder">
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
                <p className="street">{this.props.address.street}</p>
                <p className="Suburb">{this.props.address.suburb}</p>
                <p className="City">{this.props.address.city}</p>
                <p className="country">{this.props.address.country}</p>
            </div>
        </div>
    }
}