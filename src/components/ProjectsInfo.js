import React from "react"

export default class ProjectsInfo extends React.Component {
    render() {
        return (
            <div className="references-info" style={{padding: "0px 5%"}}>
                <div className="firstDiv" style={{display: "flex", justifyContent: "space-between", paddingRight: "20%"}}>
                    <div className="project-holder">
                        <h3>{this.props.info.summary}</h3> 
                        <p>{this.props.info.url}</p>
                    </div>
                    <div className="references-buttons">
                        <button style={{padding: "9% 37%"}} onClick={event => {
                            this.props.showProjectsEdit();
                            this.props.showInput(this.props.id, "projects");
                        }}>Edit</button>
                        <button 
                            style={{padding: "9% 37%"}} 
                            onClick={() => this.props.delete(this.props.id, "projects")}
                        >Delete</button>
                    </div>

                </div>
            </div>
        )
    }
}
