import React from "react";
import uniqid from 'uniqid';

export default class ReferencesInfo extends React.Component {
    constructor() {
        super();
    }

    render() {
        const styles = {display: "flex", flexDirection: "column", alignItems: "flex-start"};
        const styles2 = {padding: "9% 37%"}
        return (
            <div className="references-info"  style={{padding: "0 5%"}}>
                <div className="firstDiv" style={{display: "flex", justifyContent: "space-between", paddingRight: "20%"}}>
                    <div className="secondDiv refDiv" style={styles}>
                        <h4>{this.props.info.name.toUpperCase()}</h4>
                        <h4>{this.props.info.position.toUpperCase()}</h4>
                        <h4>{this.props.info.company.toUpperCase()}</h4>
                        <h4>{this.props.info.number.toUpperCase()}</h4>
                        <h4>{this.props.info.email}</h4>
                    </div>
                    <div className="references-buttons">
                        <button style={styles2} onClick={event => {
                            this.props.showReferencesEdit();
                            this.props.showInput(this.props.id, "references");
                        }}>Edit</button>
                        <button 
                            style={styles2}
                            onClick={() => this.props.delete(this.props.id, "references")}
                        >Delete</button>
                    </div>
                </div>
                <p>{this.props.info.description}
                </p>
            </div>  
        )
    }
}