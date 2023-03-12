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
                <p onClick={() => {
                    this.props.click(['street', "suburb", 'city', 'country']);
                }}>EDIT</p>
            </div>
            <i className="fa-solid fa-location-dot"></i>
            <div style={{maxWidth: "100%", minWidth: "100%"}}>
                <p className="street" style={styles}>{this.props.text('street')}</p>
                <p className="Suburb" style={styles}>{this.props.text('suburb')}</p>
                <p className="City" style={styles}>{this.props.text('city')}</p>
                <p className="country" style={styles}>{this.props.text('country')}</p>
            </div>
        </div>
    }
}