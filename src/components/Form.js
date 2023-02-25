import React from "react"

export default class Form extends React.Component {
    constructor() {
        super();
    }

    capital(str) {
        const first = str[0].toUpperCase();
        const rest = str.slice(1).toLowerCase();
        return first + rest;
    }
    
    render() {
        const inputs = this.props.data.map(i => {
            if(i.show) {
                return (
                    <div className="input-holder" key={i.id2}>
                        <label htmlFor={i.name}>{this.capital(i.name)}</label>
                        {
                            i.name === "profile" ? 
                            <textarea 
                                className="summary-textarea"
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

        const inputs2 = ["title", "companyName", "experienceStartDate", "experienceEndDate", "description"].map(i => {
            return this.props.state.experience.map(j => {
                return (
                    <div className="input-holder">
                        <label>{i}</label>
                        <input type="text" name={i} key={i} value={this.props.val(i, j.id)} onChange={event => this.props.edit(event, j.id, i)}/>
                    </div>
                )
            });
        });
        // const inputs2 = this.props.state.experience.map(i => {
        //         return (
        //             <div className="input-holder">
        //                 <label>{i}</label>
        //                 <input type="text" name={i} key={i} value={this.props.val(i, i.id)} onChange={event => this.props.edit(event, j.id, i)}/>
        //             </div>
        //         )

        // });

        const styles = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "repeat(auto, 1fr)",
            columnGap: "40px"
        }

        const styles2 = {
            minWidth: "55vw"
        }

        
        return (
            <div id="overlay" style={{display: this.props.state.show ? "flex" : "none"}}>
                <div className="form" style={this.props.state.showExperienceBox ? styles2 : null}>
                    <div className="form-title">
                        <h1 style={{textAlign: "center"}}>EDIT</h1>
                        <hr />
                    </div>
                    <div className="inputs" style={this.props.state.showExperienceBox ? styles : null}>
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