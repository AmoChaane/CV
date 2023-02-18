import React from "react"
import pic from "../images/pexels-clay-elliot-14634933.jpg";

export default class PersonalInfo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="personal-info">
            <div className="image">
                <img src={pic} alt="Profile Picture"/>
            </div>
            <div className="info">
                <div className="section">
                    <div className="overlay">
                        <p>EDIT</p>
                    </div>
                    <div className="f"><i className="fa-solid fa-envelope" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="email">{this.props.state.email}</p></div>
                    <div className="f"><i className="fa-solid fa-mobile" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="number">{this.props.state.number}</p></div>
                    <div className="f"><i className="fa-solid fa-globe" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="website">{this.props.state.website}</p></div>
                </div>
            </div>
        </div>
    }
}