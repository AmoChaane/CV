import React from "react"
import EducationInfo from "./EducationInfo"
import uniqid from 'uniqid';

export default class Education extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // <i className="fa-solid fa-trash" onClick={() => this.props.delete(i.id, "education")}></i>
        const education = this.props.education.map(i => {
            return (
                <EducationInfo info={i} delete={this.props.delete} id={i.id} key={i.id} text={this.props.text}/>
            )
        });
        return <div className="education">
            <span>
                <h3 className="education-title">EDUCATION</h3>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </span>
            <div className="education-slots">
                {/* <div className="education-info">
                    <h4 className="course">MARKETING DEGREE</h4>
                    <h4 className="university">RICHFIELD COLLEGE</h4>
                    <p className="course-period">2023 - 2026</p>
                </div>
                <div className="education-info">
                    <h4 className="course">MARKETING DEGREE</h4>
                    <h4 className="university">RICHFIELD COLLEGE</h4>
                    <p className="course-period">2023 - 2026</p>
                </div> */}
                {education}
                <p className="add" onClick={() => {
                    // this.props.click(['skill']);
                    // this.props.addSkill();
                    this.props.click(["institution", "course", "institutionStartDate", "institutionEndDate"]);
                    this.props.showEducationBox();
                }}>
                    <i className="fa-solid fa-plus"></i> Add Education</p>
            </div>
        </div>
    }
}