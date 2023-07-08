import React from "react"
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import References from "./References";
import Projects from "./Projects";

export default class MainInfo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="mainInfo">
            <PersonalInfo state={this.props.state} text={this.props.text} click={this.props.click} previewImage={this.props.previewImage}/>
            <Summary profile={this.props.state.profile} text={this.props.text} click={this.props.click} showSummary={this.props.showSummary}/>
            {   this.props.state.showExperience ?
                <Experience 
                    state={this.props.state}
                    experience={this.props.state.experience} 
                    text={this.props.text} 
                    click={this.props.click}
                    showExperienceBox={this.props.showExperienceBox}
                    reset={this.props.reset}
                    delete={this.props.delete}
                    add={this.props.add}
                    edit={this.props.edit}
                    showExperienceEditBox={this.props.showExperienceEditBox}
                    showInput={this.props.showInput}
                    alternateExperience={this.props.alternateExperience}
                /> 
                :
                <div className="add-section" style={{background: "#EAE9E8"}} 
                onClick={() => {
                    this.props.alternateExperience()
                }}>
                    <p 
                    className="add">
                    <i className="fa-solid fa-plus"></i> Add Experience</p>
                </div>
            }
            {   this.props.state.showReferencesSection ?
                <References 
                    state={this.props.state}
                    references={this.props.state.references} 
                    text={this.props.text} 
                    click={this.props.click}
                    showReferences={this.props.showReferences}
                    reset={this.props.reset}
                    delete={this.props.delete}
                    add={this.props.add}
                    edit={this.props.edit}
                    showReferencesEdit={this.props.showReferencesEdit}
                    showInput={this.props.showInput}
                    alternateReferences={this.props.alternateReferences}
                />
                :
                <div className="add-section" style={{background: "#EAE9E8"}}
                onClick={() => {
                    this.props.alternateReferences()
                }}>
                    <p 
                    className="add">
                    <i className="fa-solid fa-plus"></i> Add References</p>
                </div>
            }
            {
                this.props.state.showProjects ?
                <Projects 
                    state={this.props.state} 
                    text={this.props.text} 
                    click={this.props.click} 
                    delete={this.props.delete} 
                    add={this.props.add} 
                    handle={this.props.handle} 
                    addSkill={this.props.addSkill} 
                    showSkillBox={this.props.showSkillBox} 
                    showEducationBox={this.props.showEducationBox} 
                    showProjectBox={this.props.showProjectBox}
                    showProjectsEdit={this.props.showProjectsEdit}
                    projects={this.props.state.projects}
                    showInput={this.props.showInput}
                    edit={this.props.edit}
                    alternateProjects={this.props.alternateProjects}
                    updateMaxLength={this.props.updateMaxLength}
                />
                :
                <div className="add-section" style={{background: "#EAE9E8"}}
                onClick={() => {
                    this.props.alternateProjects()
                }}>
                    <p 
                    className="add">
                    <i className="fa-solid fa-plus"></i> Add Projects</p>
                </div>
            }
        </div>
    }
}