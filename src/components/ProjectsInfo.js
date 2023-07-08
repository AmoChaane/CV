import React from "react"

export default class ProjectsInfo extends React.Component {
    render() {
        return (
            <div className="references-info" style={{padding: "0px 5%"}}>
                <div className="firstDiv" style={{display: "flex", justifyContent: "space-between", paddingRight: "20%"}}>
                    <div className="project-holder">
                        <h3>{this.props.info.name}</h3> 
                        <p style={{fontSize: "1.2em", display: !this.props.info.summary ? "none" : "block"}}>{this.props.info.summary}</p>
                        <p>&gt;&gt; {this.props.info.url}</p>
                    </div>
                    <div className="references-buttons">
                        <button style={{padding: "9% 37%"}} onClick={event => {
                            this.props.showProjectsEdit();
                            this.props.showInput(this.props.id, "projects");
                            this.props.updateMaxLength(this.props.info.summary.length);
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
