import React from "react"
import ExperienceInfo from "./ExperienceInfo";
import uniqid from 'uniqid';

export default class Experience extends React.Component {
    constructor() {
        super()
    }

    render() {
        const styles = {display: "flex", columnGap: "20px", alignItems: "center"};
        const styles2 = {fontWeight: "900", textDecoration: "underline", fontSize: "1.2em"};
        const experience = this.props.experience.map(i => <ExperienceInfo info={i} key={i.id} delete={this.props.delete} id={i.id} edit={this.props.edit} click={this.props.click} showExperienceBox={this.props.showExperienceBox} showExperienceEditBox={this.props.showExperienceEditBox} showInput={this.props.showInput}/>);

        return <div className="experience">
            <div style={{marginBottom: "3%"}}>
                <div style={styles}>
                    <h3 style={{paddingLeft: "5%"}}>EXPERIENCE</h3>
                    <p className="experience-p p" style={styles2} onClick={() => {
                            this.props.click(["title", "companyName", "experienceStartDate", "experienceEndDate", "description"]);
                            this.props.showExperienceBox();
                        }}>Add</p>
                </div>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </div>
            <div className="experience-info-container">
                {experience}
            </div>
        </div>
    }
}