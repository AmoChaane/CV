import React from "react"

export default class Address extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="address section">
            <div className="overlay">
                <p onClick={() => {
                    this.props.click(['street', "suburb", 'city', 'country']);
                }}>EDIT</p>
            </div>
            <div className="address-icon-holder">
                <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
                <p className="street">{this.props.text('street')}</p>
                <p className="Suburb">{this.props.text('suburb')}</p>
                <p className="City">{this.props.text('city')}</p>
                <p className="country">{this.props.text('country')}</p>
            </div>
        </div>
    }
}