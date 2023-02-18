import React from "react";

export default class ExperienceInfo extends React.Component {
    constructor() {
        super();
    }

    render() {
        const points = this.props.info.experiencePoints.map(i => <li>{i}</li>);
        return (
            <div className="experience-info"  style={{padding: "0 5%"}}>
                <h4>{this.props.info.title.toUpperCase()}</h4>
                <div>
                    <h4>{this.props.info.companyName.toUpperCase()}</h4>
                    <div className="circle"></div>
                    {/* <h4>2018 to 2022</h4> */}
                    <div>
                        <h4 className="experience-start-date">{this.props.info.experienceStartDate}</h4>
                        <h4>to</h4>
                        <h4 className="experience-end-date">{this.props.info.experienceEndDate}</h4>
                    </div>
                </div>
                <p>{this.props.info.description}
                </p>
                <ul className="experience-points">
                    {/* <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                    <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li>
                    <li>modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur</li> */}
                    {points}
                </ul>
            </div>  
        )
    }
}