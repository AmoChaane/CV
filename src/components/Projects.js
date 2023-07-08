import React from "react"
import ProjectsInfo from "./ProjectsInfo";

export default class Projects extends React.Component {
    constructor() {
        super()
    }

    render() {
        const styles = {display: "flex", columnGap: "20px", alignItems: "center"};
        const styles2 = {fontWeight: "900", textDecoration: "underline", fontSize: "1.2em"};
        const {info} = this.props.state;
        // const projects = this.props.projects.map(i => {
        //     return (
        //         <div className="references-info" key={i.id} style={{padding: "0px 5%"}}>
        //             <div className="firstDiv" style={{display: "flex", justifyContent: "space-between", paddingRight: "20%"}}>
        //                 <div className="project-holder">
        //                     <h3>{i.summary}</h3> 
        //                     <p>{i.text}</p>
        //                 </div>
        //                 <div className="references-buttons">
        //                     <button style={{padding: "9% 37%"}} onClick={event => {
        //                         // this.props.showReferencesEdit();
        //                         // this.props.showInput(this.props.id, "references");
        //                     }}>Edit</button>
        //                     <button 
        //                         style={{padding: "9% 37%"}} 
        //                         onClick={() => this.props.delete(i.id, "projects")}
        //                     >Delete</button>
        //                 </div>

        //             </div>
        //         </div>
        //     )

        // })
        const projects = this.props.projects.map(i => <ProjectsInfo info={i} key={i.id} delete={this.props.delete} id={i.id} edit={this.props.edit} click={this.props.click} showInput={this.props.showInput} showProjectsEdit={this.props.showProjectsEdit}/>);
        
        return <div className="references" style={{width: "100%"}}>
            <div style={{marginBottom: "3%"}}>
                    <div style={styles}>
                        <h3 className="h3" style={{paddingLeft: "5%"}}>PROJECTS</h3>
                        <p className="references-p p" style={styles2} onClick={() => {
                                this.props.click(["projectHeading", "project"]);
                                this.props.showProjectBox();
                            }}>Add</p>
                        <p className="references-p p" style={styles2} onClick={() => {
                            this.props.alternateProjects();
                        }}>Remove</p>
                    </div>
                    <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
                </div>
            <div className="projects-info-container">
                {projects}
            </div>
        </div>
    }
}