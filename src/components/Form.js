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
                    <div className="input-holder" key={uniqid()}>
                        <label htmlFor={i.name}>{this.capital(i.name)}</label>
                        {
                            i.name == "profile" ? 
                            <textarea 
                                name={i.name} 
                                id={i.name} 
                                value={this.props.text(i.name)} 
                                onChange={(event) => this.props.handleChange(event, i.name)} 
                                key={uniqid()}>
                            </textarea> 

                            :

                            <input type={i.type} 
                            name={i.name} 
                            id={i.name} 
                            value={this.props.text(i.name)} 
                            onChange={(event) => this.props.handleChange(event, i.name)} 
                            key={uniqid()}/>
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
                    {inputs}
                    <div className="buttons">
                        <button onClick={this.props.submit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}