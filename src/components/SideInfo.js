import React from "react"
import Address from "./Address";
import Skills from "./Skills";
import Education from "./Education";
import NameAndRole from "./NameAndRole";
import Projects from "./Projects";

export default class SideInfo extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <div className="sideInfo">
            <Address address={this.props.state} text={this.props.text} click={this.props.click}/>
            <NameAndRole state={this.props.state} text={this.props.text} click={this.props.click}/>
            <Education education={this.props.state.education} text={this.props.text} click={this.props.click} showEducationBox={this.props.showEducationBox} showExperienceBox={this.props.showExperienceBox} delete={this.props.delete}/>
            <Skills state={this.props.state} text={this.props.text} click={this.props.click} delete={this.props.delete} add={this.props.add} handle={this.props.handle} addSkill={this.props.addSkill} showSkillBox={this.props.showSkillBox} showEducationBox={this.props.showEducationBox}/>
            {/* <Projects state={this.props.state} text={this.props.text} click={this.props.click} delete={this.props.delete} add={this.props.add} handle={this.props.handle} addSkill={this.props.addSkill} showSkillBox={this.props.showSkillBox} showEducationBox={this.props.showEducationBox} showProjectBox={this.props.showProjectBox}/> */}

        </div>
    }
}