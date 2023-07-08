import React from "react"
import uniqid from 'uniqid';

export default class Skills extends React.Component {
    constructor() {
        super()
    }

    render() {
        const {info} = this.props.state;
        // console.log(info);
        // console.log(info[info.length - 1]);
        const skills = info[info.length - 1].map(i => {
            return (
                <div className="skill-holder" key={i.id}>
                    <li>{i.text}</li> 
                    <i className="fa-solid fa-trash" onClick={() => this.props.delete(i.id, "skills")}></i>
                    <i className="fa-solid fa-pencil" onClick={() => {
                        this.props.showSkillBoxEdit();
                        this.props.click(["skillEdit"]);
                        this.props.editSkillItem(i.id)
                        
                    }}></i>
                    {/* <button onClick={() => this.props.delete(i.id)}>Delete</button> */}
                </div>
            )
        })
        return <div className="skills">
            <span>
                <h3 className="skills-title">SKILLS</h3>
                <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
            </span>
            <ul className="skills-points">
                <p className="add" onClick={() => {
                    this.props.click(["skill"]);
                    this.props.showSkillBox();
                }}>
                    <i className="fa-solid fa-plus"></i> Add Skill</p>
                {skills}
                
            </ul>
        </div>
    }
}