import React from "react"
// import pic from this.props.state.image.previewUrl

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

        const styles2= {
            height: "100%",
            // backgroundImage: `url(../images/pexels-clay-elliot-14634933.jpg)`,
            backgroundImage: `url(${this.props.state.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "noRepeat",
            maxWidth: "100%",
            // filter: "gray",
            // filter: "grayscale(100%)",
            // border: "1px solid black",
            borderRadius: "0 0 10px 10px",
            // borderRadius: "50%"
        
        }        
        

        return <div className="personal-info">
            <div className="image section" style={styles2}>
            {/* <img className="section" alt="Profile Picture"/> */}
                <div className="overlay">
                    <label className="overlay" htmlFor="image-upload">Add Image</label>
                    <input type="file" id="image-upload" accept="image/*" onChange={(event) => this.props.previewImage(event)}/>
                </div>
            </div>
            <div className="info">
                <div className="section">
                    <p className="overlay" style={styles} onClick={() => {
                        this.props.click(['email', "number", 'website', 'linkedin']);
                    }}>EDIT</p>
                    <div className="holders">
                        <div className="f"><i className="fa-solid fa-envelope" style={{color: "#5D5C5C"}}></i></div>
                        <div className="i"><p className="email">{this.props.text('email')}</p></div>
                    </div>
                    <div className="holders">
                        <div className="f"><i className="fa-solid fa-mobile" style={{color: "#5D5C5C"}}></i></div>
                        <div className="i"><p className="number">{this.props.text('number')}</p></div>
                    </div>
                    <div className="holders" style={{display: this.props.text('website') === "" ? "none" : "grid"}}>
                        <div className="f"><i className="fa-solid fa-globe" style={{color: "#5D5C5C"}}></i></div>
                        <div className="i"><p className="website">{this.props.text('website')}</p></div>
                    </div>
                    <div className="holders" style={{display: this.props.text('linkedin') === "" ? "none" : "grid"}}>
                        <div className="f"><i className="fa-brands fa-linkedin" style={{color: "#5D5C5C"}}></i></div>
                        <div className="i"><p className="linkedin">{this.props.text('linkedin')}</p></div>
                    </div>
                </div>
            </div>
        </div>
    }
}