import React from "react"
import ReferencesInfo from "./ReferencesInfo";
import uniqid from 'uniqid';

export default class References extends React.Component {
    constructor() {
        super()
    }

    render() {
        const styles = {display: "flex", columnGap: "20px", alignItems: "center"};
        const styles2 = {fontWeight: "900", textDecoration: "underline", fontSize: "1.2em"};
        const references = this.props.references.map(i => <ReferencesInfo info={i} key={i.id} delete={this.props.delete} id={i.id} edit={this.props.edit} click={this.props.click} showReferences={this.props.showReferences} showReferencesEdit={this.props.showReferencesEdit} showInput={this.props.showInput}/>);

        return (
            <div className="references" style={{width: "100%"}}>
                <div style={{marginBottom: "3%"}}>
                    <div style={styles}>
                        <h3 style={{paddingLeft: "5%"}}>REFERENCES</h3>
                        <p className="references-p p" style={styles2} onClick={() => {
                                this.props.click(["refName", "refCompany", "refNumber", "refEmail", "refPosition"]);
                                this.props.showReferences();
                            }}>Add</p>
                        <p className="references-p p" style={styles2} onClick={() => {
                            this.props.alternateReferences();
                        }}>Remove</p>
                    </div>
                    <div style={{height: "1px", width: "25%", backgroundColor: "#5D5C5C", marginTop: "10px"}}></div>
                </div>
                <div className="references-info-container">
                    {references}
                </div>
            </div>
        )
    }
}