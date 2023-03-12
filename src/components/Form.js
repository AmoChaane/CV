import React from "react"

export default class Form extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        const inputs = this.props.data.map(i => {
            if(i.show) {
                return (
                    <div className="input-holder" key={i.id2}>
                        <label htmlFor={i.name}>{this.props.capital(i.name)}</label>
                        {
                            i.name === "profile" || i.name === "description" || i.name === "profile2" || i.name === "profile3"? 
                            <textarea 
                                className="summary-textarea"
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
        console.log(inputs)

        const inputs2 = ["title", "companyName", "experienceStartDate", "experienceEndDate", "description"].map(i => {
            return this.props.state.experience.map(j => {
                if(j.show) {
                    if(i !== "description") {
                        return (
                            <div className="input-holder">
                                <label>{this.props.capital(i)}</label>
                                <input type="text" name={i} key={i} value={this.props.val(i, j.id)} onChange={event => this.props.edit(event, j.id, i)}/>
                            </div>
                        )
                    } else {
                        return (
                            <div className="input-holder">
                                <label>{this.props.capital(i)}</label>
                                <textarea 
                                    className="summary-textarea"
                                    name={i} 
                                    // id={i.name} 
                                    value={this.props.val(i, j.id)} 
                                    onChange={event => this.props.edit(event, j.id, i)} 
                                    key={i}>
                                </textarea> 
                            </div>
                        )
                    }
                }
            });
        });

        const styles = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "repeat(auto, 1fr)",
            columnGap: "40px"
        }

        const styles2 = {
            minWidth: "55vw"
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
                <div className="form" style={this.props.state.showExperienceBox ? styles2 : null}>
                    <div className="form-title">
                        <h1 style={{textAlign: "center"}}>{
                            this.props.state.showExperienceBox ? "Add Experience" :
                            this.props.state.showEducationBox ? "Add Education" :
                            this.props.state.showSkillBox ? "Add Skill" :
                            this.props.state.showSummary ? "Edit Profile" : "Edit"
                        }</h1>
                        <hr />
                    </div>
                    <div className="inputs" style={this.props.state.showExperienceBox ? styles : 
                    this.props.state.showExperienceEditBox ? styles3 : this.props.state.showSummary ? styles4 : 
                    inputs.filter(k => k).length >= 5 ? styles3 : null
                    }>
                        {this.props.state.showExperienceEditBox ? inputs2 : inputs}
                    </div>

                    {
                        <div className="buttons">
                            {
                                this.props.state.showSkillBox ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("skills");
                                        this.props.submit('skill')
                                        this.props.reset();
                                    }}>Add Skill</button> 
                                    <button onClick={this.props.submit}>Close Edit</button>
                                </div>

                                :

                                this.props.state.showEducationBox ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("education");
                                        this.props.submit('education')
                                        this.props.reset();
                                    }}>Add Education</button> 
                                    <button onClick={this.props.submit}>Close Edit</button>
                                </div>

                                :

                                this.props.state.showExperienceBox ?
                                <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                    <button onClick={() => {
                                        this.props.add("experience");
                                        this.props.submit('experience')
                                        this.props.reset();
                                    }}>Add Experience</button> 
                                    <button onClick={this.props.submit}>Close Edit</button>
                                </div>

                                :
                                
                                <button onClick={() => {
                                    this.props.submit();
                                    // inputs2 = null;
                                }}>Close Edit</button>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}