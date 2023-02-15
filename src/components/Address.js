import React from "react"

export default class Address extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="address">
            <div className="address-icon-holder">
                <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
                <p className="street">280 Drawwer Crescent</p>
                <p className="Suburb">Derdepoort</p>
                <p className="City">Pretoria</p>
                <p className="country">South Africa</p>
            </div>
        </div>
    }
}