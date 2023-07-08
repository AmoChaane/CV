import React from "react"

export default class Form extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        const inputs = this.props.info.map(i => {
            if(i.show) {
                return (
                    <div className="input-holder" key={i.id2}>
                        <label htmlFor={i.name}>{this.props.capital(i.name)} {i.name == "projectSummary" &&  <h6 style={{display: "inline-block", marginLeft: "15px"}}>{this.props.state.maxLength}/150</h6>}</label>
                        {
                            i.name === "profile" || i.name === "description" || i.name === "profile2" || i.name === "profile3" || i.name == "projectSummary" ? 
                            <textarea 
                                className="summary-textarea"
                                maxLength={i.name == "projectSummary" && 150}
                                // style={{width: i.name === "profile" ? "60vw" : ""}}
                                name={i.name} 
                                // id={i.name} 
                                value={this.props.text(i.name)} 
                                onChange={(event) => this.props.handleChange(event, i.name)} 
                                key={i.id}>
                            </textarea> 

                            :

                            i.name === "skill" ? 

                            <input type={i.type} 
                            name={i.name} 
                            // id={i.name} 
                            value={this.props.state.info[this.props.state.info.findIndex(k => k.name === "skill")].text} 
                            onChange={(event) => {
                                this.props.handleChange(event, i.name)
                            }} 
                            key={i.id}/>

                            :

                            i.name === "skillEdit" ? 
                            <input type={i.type} 
                            name={i.name} 
                            // id={i.name} 
                            value={this.props.state.info[this.props.state.info.findIndex(k => k.name === "skillEdit")].text} 
                            onChange={(event) => {
                                // this.props.handleChange(event, i.name)
                                // this.props.editSkillItem(i.id)
                                this.props.handleEditSkillChange(event)
                            }} 
                            key={i.id}/>

                            :


                            <input type={i.type} 
                            name={i.name} 
                            // id={i.name} 
                            value={this.props.text(i.name)} 
                            onChange={(event) => this.props.handleChange(event, i.name)} 
                            key={i.id}/>
                        }
                        
                    </div>
                )
                
            }
        });
        // console.log(inputs)

        const inputs2 = ["title", "companyName", "experienceStartDate", "experienceEndDate", "description"].map(i => {
            return this.props.state.experience.map(j => {
                if(j.show) {
                    if(i !== "description") {
                        return (
                            <div className="input-holder" key={j.id}>
                                <label>{this.props.capital(i)}</label>
                                <input type="text" name={i} key={i} value={this.props.val(i, j.id, "experience")} onChange={event => this.props.edit(event, j.id, i, "experience")}/>
                            </div>
                        )
                    } else {
                        return (
                            <div className="input-holder" key={j.id}>
                                <label>{this.props.capital(i)}</label>
                                <textarea 
                                    className="summary-textarea"
                                    name={i} 
                                    // id={i.name} 
                                    value={this.props.val(i, j.id, "experience")} 
                                    onChange={event => this.props.edit(event, j.id, i, "experience")} 
                                    key={i}>
                                </textarea> 
                            </div>
                        )
                    }
                }
            });
        });


        const inputs3 = ["name", "company", "position", "number", "email"].map(i => {
            return this.props.state.references.map(j => {
                if(j.show) {
                    return (
                        <div className="input-holder" key={j.id}>
                            <label>{this.props.capital(i)}</label>
                            <input type="text" name={i} key={i} value={this.props.val(i, j.id, "references")} onChange={event => this.props.edit(event, j.id, i, "references")}/>
                        </div>
                    )
                }
            });
        });

        const inputs4 = ["name", "summary", "url"].map(i => {
            return this.props.state.projects.map(j => {
                if(j.show) {
                    if(i == "summary") {
                        return (
                            <div className="input-holder" key={j.id}>
                                <label>{this.props.capital(i)} <h6 style={{display: "inline-block", marginLeft: "15px"}}>{this.props.state.maxLength}/150</h6></label>
                                <textarea maxLength={150} name={i} key={i} value={this.props.val(i, j.id, "projects")} onChange={event => this.props.edit(event, j.id, i, "projects")} style={{height: "120px", minWidth: "100%", padding: "5px"}}/>
                            </div>
                        )
                    }
                    return (
                        <div className="input-holder" key={j.id}>
                            <label>{this.props.capital(i)}</label>
                            <input type="text" name={i} key={i} value={this.props.val(i, j.id, "projects")} onChange={event => this.props.edit(event, j.id, i, "projects")}/>
                        </div>
                    )
                }
            })
        })

        const styles = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "repeat(auto, 1fr)",
            columnGap: "40px"
        }

        const styles2 = {
            // minWidth: "600"
        }

        const styles3 = {...styles, ...styles2}

        const styles4 = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            rowGap: "30px",
            columnGap: "30px",
            width: "75vw"
        }

        
        return (
            <div id="overlay" style={{display: this.props.state.show ? "flex" : "none"}}>
                <div className="form" style={{minWidth: "600px", maxHeight: "98vh", overflow: "auto"}}>
                    <div className="form-title">
                        <h1 style={{textAlign: "center"}}>{
                            this.props.state.showExperienceBox ? "Add Experience" :
                            this.props.state.showEducationBox ? "Add Education" :
                            this.props.state.showSkillBox ? "Add Skill" :
                            // this.props.state.showSkillBoxEdit ? "Edit Skill" :
                            this.props.state.showSummary ? "Edit Profile" : 
                            this.props.state.showReferences ? "Add Reference" :
                            this.props.state.showProjectBox ? "Add Project" :
                            "Edit"
                        }</h1>
                        <hr />
                    </div>
                    <div className="inputs" style={this.props.state.showExperienceBox ? styles : 
                    this.props.state.showExperienceEditBox || this.props.state.showReferencesEdit ? styles3 : this.props.state.showSummary ? styles4 : 
                    inputs.filter(k => k).length >= 5 ? styles3 : null
                    }>
                        {this.props.state.showExperienceEditBox ? inputs2 : 
                        this.props.state.showReferencesEdit ? inputs3 :
                        this.props.state.showProjectsEdit ? inputs4 :
                        inputs}
                    </div>

                    {/* ---------------------BUTTONS------------------------ */}

                    {
                        <div className="buttons">
                            {
                                this.props.state.showSkillBox ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("skills");
                                        this.props.submit()
                                        this.props.reset();
                                    }}>Add Skill</button> 
                                    <button onClick={() => {
                                        this.props.submit()
                                        this.props.resetAllFields();
                                    }}>Close Edit</button>
                                </div>

                                :

                                this.props.state.showSkillBoxEdit ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.publishEdit()
                                        this.props.submit();
                                    }}>Publish Edit</button> 
                                    <button onClick={() => {
                                        this.props.submit()
                                        this.props.resetAllFields();
                                    }}>Close Edit</button>
                                </div>

                                :

                                this.props.state.showEducationBox ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("education");
                                        this.props.submit()
                                        this.props.reset();
                                    }}>Add Education</button> 
                                    <button onClick={() => {
                                        this.props.submit()
                                        this.props.resetAllFields();
                                    }}>Close Edit</button>
                                </div>

                                :

                                this.props.state.showExperienceBox ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("experience");
                                        this.props.submit()
                                        this.props.reset();
                                    }}>Add Experience</button> 
                                    <button onClick={() => {
                                        this.props.submit()
                                        this.props.resetAllFields();
                                    }}>Close Edit</button>
                                </div>
                                
                                :

                                this.props.state.showReferences ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("references");
                                        this.props.submit()
                                        this.props.reset();
                                    }}>Add Reference</button> 
                                    <button onClick={() => {
                                        this.props.submit()
                                        this.props.resetAllFields();
                                    }}>Close Edit</button>
                                </div>

                                :

                                this.props.state.showProjectBox ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("projects");
                                        this.props.submit()
                                        this.props.reset();
                                    }}>Add Project</button> 
                                    <button onClick={() => {
                                        this.props.submit()
                                        this.props.resetAllFields();
                                    }}>Close Edit</button>
                                </div>

                                :

                                
                                
                                <button onClick={() => {
                                    this.props.submit();
                                    this.props.updateMaxLength(0)
                                    this.props.resetAllFields();
                                }}>Close Edit</button>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}