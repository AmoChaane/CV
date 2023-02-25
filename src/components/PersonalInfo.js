import React from "react"
import pic from "../images/pexels-clay-elliot-14634933.jpg";

export default class PersonalInfo extends React.Component {
    constructor() {
        super()
    }

    render() {
        const styles = 
        {
            fontWeight: "900", 
            textDecoration: "underline", 
            fontSize: "1.1em", 
            cursor: "pointer"
        };

        return <div className="personal-info">
            <div className="image section">
            {/* <img className="section" src={pic} alt="Profile Picture"/> */}
                <div className="overlay">
                    <p className="overlay">EDIT</p>
                </div>
            </div>
            <div className="info">
                <div className="section">
                    <p className="overlay" style={styles} onClick={() => {
                        this.props.click(['email', "number", 'website']);
                    }}>EDIT</p>
                    <div className="f"><i className="fa-solid fa-envelope" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="email">{this.props.text('email')}</p></div>
                    <div className="f"><i className="fa-solid fa-mobile" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="number">{this.props.text('number')}</p></div>
                    <div className="f"><i className="fa-solid fa-globe" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="website">{this.props.text('website')}</p></div>
                </div>
            </div>
        </div>
    }
}