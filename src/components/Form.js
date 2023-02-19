import React from "react"

export default class Form extends React.Component {
    constructor() {
        super();
    }

    render() {
        const inputs = this.props.data.map(i => {
            return (
                <div className="input-holder">
                    <label htmlFor={i.name}>{i.name}</label>
                    <input type={i.type} name={i.name} id={i.name} value={i.value}/>
                </div>
            )
        });
        return (
            <div className="form">
                <div className="form-title">
                    <h1 style={{textAlign: "center"}}>EDIT</h1>
                    <hr />
                </div>
                {inputs}
            </div>
        )
    }
}