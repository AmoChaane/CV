import React from "react"

export default class Address extends React.Component {
    constructor() {
        super()
    }

    render() {
        const styles = {
            maxWidth: "100%"
        }
        return <div className="address section">
            <div className="overlay">
                <p 
                style={{marginRight: "20px"}}
                onClick={() => {
                    this.props.click(['street', "suburb", 'city', 'country']);
                }}>EDIT</p>
                <p onClick={() => {
                    this.props.alternateAddress()
                }}>REMOVE</p>
            </div>
            <i className="fa-solid fa-location-dot"></i>
            <div className="address-holder" style={{maxWidth: "100%"}}>
                <p className="street" style={styles}>{this.props.text('street') + ","}</p>
                <p className="Suburb" style={styles}>{this.props.text('suburb') + ","}</p>
                <p className="City" style={styles}>{this.props.text('city') + ","}</p>
                <p className="country" style={styles}>{this.props.text('country')}</p>
            </div>
        </div>
    }
}