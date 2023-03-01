import React from "react"

export default class Summary extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="summary section">
            <div style={{marginBottom: "3%"}}>
                <div>
                    <h3 style={{paddingLeft: "5%"}}>PROFILE</h3>
                    <p className="profile-para p" onClick={() => {
                        this.props.click(['profile', 'profile2', 'profile3']);
                        this.props.showSummary();
                    }}>EDIT</p>
                </div>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </div>
            <p style={{padding: "0 5%"}}>{this.props.text('profile')}</p>
            <br />
            <br />
            <p style={{padding: "0 5%"}}>{this.props.text('profile2')}</p>
            <br />
            <br />
            <p style={{padding: "0 5%"}}>{this.props.text('profile3')}</p>
            
        </div>
    }
}