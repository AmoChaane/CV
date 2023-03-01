import React from "react"

export default class Projects extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {info} = this.props.state;
        const projects = info[info.length - 2].map(i => {
            return (
                <div className="skill-holder" key={i.id}>
                    <li>{i.text}</li> 
                    <i className="fa-solid fa-trash" onClick={() => this.props.delete(i.id, "projects")}></i>
                </div>
            )
        })
        return <div className="skills">
            <span>
                <h3 className="skills-title">PROJECTS</h3>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </span>
            <ul className="skills-points">
                {projects}
                <p className="add" onClick={() => {
                    this.props.click(["project"]);
                    this.props.showProjectBox();
                }}>
                    <i className="fa-solid fa-plus"></i> Add Project</p>
            </ul>
        </div>
    }
}