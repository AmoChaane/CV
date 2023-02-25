import React from "react";
import uniqid from 'uniqid';

export default class ExperienceInfo extends React.Component {
    constructor() {
        super();
    }

    render() {
        const styles = {display: "flex", flexDirection: "column", alignItems: "flex-start"};
        const styles2 = {padding: "9% 37%"}
        // const points = this.props.info.experiencePoints.map(i => <li key={uniqid()}>{i}</li>);
        return (
            <div className="experience-info"  style={{padding: "0 5%"}}>
                <div className="firstDiv" style={{display: "flex", justifyContent: "space-between", paddingRight: "20%"}}>
                    <div className="secondDiv" style={styles}>
                        <h4>{this.props.info.title.toUpperCase()}</h4>
                        <div className="thirdDiv">
                            <h4>{this.props.info.companyName.toUpperCase()}</h4>
                            <div className="circle"></div>
                            {/* <h4>2018 to 2022</h4> */}
                            <div className="fourthDiv">
                                <h4 className="experience-start-date">{this.props.info.experienceStartDate}</h4>
                                <h4>to</h4>
                                <h4 className="experience-end-date">{this.props.info.experienceEndDate}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="experience-buttons">
                        <button style={styles2}>Edit</button>
                        <button 
                            style={styles2}
                            onClick={() => this.props.delete(this.props.id, "experience")}
                        >Delete</button>
                    </div>
                </div>
                <p>{this.props.info.description}
                </p>
                <ul className="experience-points">
                    {/* {points} */}
                </ul>
            </div>  
        )
    }
}