import React from "react"

export default class Experience extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="experience">
            <div style={{marginBottom: "3%"}}>
                <h3 style={{paddingLeft: "5%"}}>EXPERIENCE</h3>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </div>
            <div className="experience-info-container">
                <div className="experience-info"  style={{padding: "0 5%"}}>
                    <h4>JOB TITLE GOES HERE</h4>
                    <div>
                        <h4>COMPANY NAME</h4>
                        <div></div>
                        <h4>2018 to 2022</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt 
                        tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione 
                        modi asperiores dolorum fugiat saepe cupiditate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt 
                        tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione 
                        modi asperiores dolorum fugiat saepe cupiditate.
                    </p>
                    <ul className="experience-points">
                        <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                        <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                        <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                    </ul>
                </div>

                <div className="experience-info"  style={{padding: "0 5%"}}>
                    <h4>JOB TITLE GOES HERE</h4>
                    <div>
                        <h4>COMPANY NAME</h4>
                        <div></div>
                        <h4>2018 to 2022</h4>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt 
                        tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione 
                        modi asperiores dolorum fugiat saepe cupiditate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt 
                        tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione 
                        modi asperiores dolorum fugiat saepe cupiditate.
                    </p>
                    <ul className="experience-points">
                        <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                        <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                        <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}