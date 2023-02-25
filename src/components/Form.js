import React from "react"
import uniqid from 'uniqid';

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
                            i.name == "profile" ? 
                            <textarea 
                                className="summary-textarea"
                                name={i.name} 
                                // id={i.name} 
                                value={this.props.text(i.name)} 
                                onChange={(event) => this.props.handleChange(event, i.name)} 
                                key={i.id}>
                            </textarea> 

                            :

                            i.name == "skill" ? 

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

        
        return (
            <div id="overlay" style={{display: this.props.state.show ? "flex" : "none"}}>
                <div className="form">
                    <div className="form-title">
                        <h1 style={{textAlign: "center"}}>EDIT</h1>
                        <hr />
                    </div>
                    <div className="inputs">
                        {inputs}
                    </div>
                    {/* {this.props.state.skillBoxShow && input2} */}
                    {
                        // !this.props.state.skillAdded && 
                        <div className="buttons">
                            {
                                // !this.props.state.showSkillBox ? 
                                // <button onClick={this.props.submit}>Close Edit</button>
                                // :

                                // <button onClick={() => {
                                //     this.props.add(this.props.state.info[this.props.state.info.findIndex(k => k.name === "skill")].text);
                                //     this.props.submit()
                                //     this.props.update();
                                // }}>Add Skill</button>
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
                                
                                <button onClick={this.props.submit}>Close Edit</button>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }
}