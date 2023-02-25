import React from "react";

export default class EducationInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-info">
                <div>
                    <h4 className="course">{this.props.info.course.toUpperCase()}</h4>
                    <h4 className="university">{this.props.info.university.toUpperCase()}</h4>
                    <div className="course-period" style={{display: "flex"}}>
                        <p className="start-date">{this.props.info.startDate}</p>
                        <p> - </p>
                        <p className="end-date">{this.props.info.endDate}</p>
                    </div>
                </div>
                <i className="fa-solid fa-trash" onClick={() => this.props.delete(this.props.id, "education")}></i>
            </div>
        )
    }
}