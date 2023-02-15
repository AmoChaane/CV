import React from "react"

export default class Education extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div className="education">
            <span>
                <h3 className="education-title">EDUCATION</h3>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </span>
            <div className="education-slots">
                <div className="education-info">
                    <h4 className="course">MARKETING DEGREE</h4>
                    <h4 className="university">RICHFIELD COLLEGE</h4>
                    <p className="course-period">2023 - 2026</p>
                </div>
                <div className="education-info">
                    <h4 className="course">MARKETING DEGREE</h4>
                    <h4 className="university">RICHFIELD COLLEGE</h4>
                    <p className="course-period">2023 - 2026</p>
                </div>
            </div>
        </div>
    }
}