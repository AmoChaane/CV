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
                    <p>EDIT</p>
                </div>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </div>
            <p style={{padding: "0 5%"}}>{this.props.profile}
            </p>
            
        </div>
    }
}