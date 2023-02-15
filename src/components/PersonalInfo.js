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
                <div>
                    <div className="f"><i class="fa-solid fa-envelope" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="email">amogelangchaane200@gmail.com</p></div>
                    <div className="f"><i class="fa-solid fa-mobile" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="number">079 998 2723</p></div>
                    <div className="f"><i class="fa-solid fa-globe" style={{color: "#5D5C5C"}}></i></div>
                    <div className="i"><p className="website">www.amochaane.com</p></div>
                </div>
            </div>
        </div>
    }
}