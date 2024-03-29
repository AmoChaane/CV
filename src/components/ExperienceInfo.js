import React from "react";
import uniqid from 'uniqid';

export default class ExperienceInfo extends React.Component {
    constructor() {
        super();
    }

    render() {
        const styles = {display: "flex", flexDirection: "column", alignItems: "flex-start"};
        const styles2 = {padding: "9% 37%"}
        return (
            <div className="experience-info"  style={{padding: "0 5%"}}>
                <div className="firstDiv" style={{display: "flex", justifyContent: "space-between", paddingRight: "20%"}}>
                    <div className="secondDiv" style={styles}>
                        <h4>{this.props.info.title.toUpperCase()}</h4>
                        <div className="thirdDiv">
                            <h4>{this.props.info.companyName.toUpperCase()}</h4>
                            <div className="circle"></div>
                            <div className="fourthDiv">
                                <h4 className="experience-start-date">{this.props.info.experienceStartDate}</h4>
                                <h4>to</h4>
                                <h4 className="experience-end-date">{this.props.info.experienceEndDate}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="experience-buttons">
                        <button style={styles2} onClick={event => {
                            this.props.showExperienceEditBox();
                            this.props.showInput(this.props.id, "experience");
                        }}>Edit</button>
                        <button 
                            style={styles2}
                            onClick={() => this.props.delete(this.props.id, "experience")}
                        >Delete</button>
                    </div>
                </div>
                <p>{this.props.info.description}
                </p>
            </div>  
        )
    }
}