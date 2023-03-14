import React from "react"
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Experience from "./Experience";
import References from "./References";

export default class MainInfo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="mainInfo">
            <PersonalInfo state={this.props.state} text={this.props.text} click={this.props.click} previewImage={this.props.previewImage}/>
            <Summary profile={this.props.state.profile} text={this.props.text} click={this.props.click} showSummary={this.props.showSummary}/>
            <Experience 
                experience={this.props.state.experience} 
                text={this.props.text} 
                click={this.props.click}
                showExperienceBox={this.props.showExperienceBox}
                reset={this.props.reset}
                delete={this.props.delete}
                add={this.props.add}
                edit={this.props.edit}
                showExperienceEditBox={this.props.showExperienceEditBox}
                showInput={this.props.showInput}
            />
            <References 
                references={this.props.state.references} 
                text={this.props.text} 
                click={this.props.click}
                showReferences={this.props.showReferences}
                reset={this.props.reset}
                delete={this.props.delete}
                add={this.props.add}
                edit={this.props.edit}
                showReferencesEdit={this.props.showReferencesEdit}
                showInput={this.props.showInput}
            />
        </div>
    }
}