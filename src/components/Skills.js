import React from "react"

export default class Skills extends React.Component {
    constructor() {
        super()
    }

    render() {
        const skills = this.props.skills.map(i => <li>{i}</li>);
        return <div className="skills">
            <span>
                <h3 className="skills-title">SKILLS</h3>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </span>
            <ul className="skills-points">
                {skills}
            </ul>
        </div>
    }
}