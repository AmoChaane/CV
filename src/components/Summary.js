import React from "react"

export default class Summary extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="summary">
            <div style={{marginBottom: "3%"}}>
                <h3 style={{paddingLeft: "5%"}}>PROFILE</h3>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </div>
            <p style={{padding: "0 5%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt 
                tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione 
                modi asperiores dolorum fugiat saepe cupiditate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt 
                tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione 
                modi asperiores dolorum fugiat saepe cupiditate.
            </p>
            
        </div>
    }
}