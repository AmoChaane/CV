import React from "react";
import Pdf from "./Pdf";
import uniqid from 'uniqid';
import Form from "./components/Form"
import MainInfo from "./components/MainInfo"
import SideInfo from "./components/SideInfo"
import "./style.css";
import pic from "./images/pexels-clay-elliot-14634933.jpg"
import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';
// import pic1 from "./images/pexels-karolina-grabowska-4466540.jpg"
// import pic2 from "./images/pexels-mikhail-nilov-6707631.jpg"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [{ // This array holds all the info we have except for education and experience
        text: "280 Drawwer Crescent",
        type: "text",
        name: "street",
        show: false,
        id: "street",
        id2: uniqid()
      },
      {
        text: "Derdepoort",
        type: "text",
        name: "suburb",
        show: false,
        id: "suburb",
        id2: uniqid()
      },
      {
        text: "Pretoria",
        type: "text",
        name: "city",
        show: false,
        id: "city",
        id2: uniqid()
      },
      {
        text: "South Africa",
        type: "text",
        name: "country",
        show: false,
        id: "country",
        id2: uniqid()
      },
      {
        text: "Amogelang",
        type: "text",
        name: "firstName",
        show: false,
        id: "firstName",
        id2: uniqid()
      },
      {
        text: "Chaane",
        type: "text",
        name: "lastName",
        show: false,
        id: "lastName",
        id2: uniqid()
      },
      {
        text: "Web Developer",
        type: "text",
        name: "role",
        show: false,
        id: "role",
        id2: uniqid()
      },
      {
        text: "amogelangchaane200@gmail.com",
        type: "email",
        name: "email",
        show: false,
        id: "email",
        id2: uniqid()
      },
      {
        text: "079 998 2723",
        type: "tel",
        name: "number",
        show: false,
        id: "number",
        id2: uniqid()
      },
      {
        text: "www.amochaane.com",
        type: "text",
        name: "website",
        show: false,
        id: "website",
        id2: uniqid()
      },
      {
        text: "https://www.linkedin.com/in/amogelang-chaane-6044391bb/",
        type: "text",
        name: "linkedin",
        show: false,
        id: "linkedin",
        id2: uniqid()
      },
      {
        text: "https://github.com/AmoChaane",
        type: "text",
        name: "github",
        show: false,
        id: "github",
        id2: uniqid()
      },
      {
        text: "2003-08-22",
        type: "text",
        name: "age",
        show: false,
        id: "age",
        id2: uniqid()
      },
      {
        text: 
        "As a self-taught web developer with a strong passion for coding, I am looking for opportunities to apply and expand my skills. My experience has been focused on front-end development using HTML, CSS, and JavaScript. I have also worked with the popular library, 'React', to build dynamic and responsive web applications. ",
        type: "text",
        name: "profile",
        show: false,
        id: "profile",
        id2: uniqid()
      },
      {
        text: 
        "I am highly motivated and proactive, with a strong desire to learn and grow. I enjoy taking on new challenges and am always eager to learn new technologies and techniques. I have a strong attention to detail and a commitment to producing high-quality work. In addition to my technical skills, I have excellent communication and problem-solving skills. I am a quick learner, a good team player, and have a positive attitude towards challenges. I am also passionate about building user-centered and accessible web applications. ",
        type: "text",
        name: "profile2",
        show: false,
        id: "profile",
        id2: uniqid()
      },
      {
        text: 
        "I am excited about the opportunity to work with a dynamic team that values creativity, innovation, and collaboration. I am confident that my skills, passion, and commitment to excellence make me an excellent candidate for any junior web developer position.",
        type: "text",
        name: "profile3",
        show: false,
        id: "profile",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "skill",
        show: false,
        id: "skill",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "project",
        show: false,
        id: "project",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "institution",
        show: false,
        id: "institution",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "course",
        show: false,
        id: "course",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "institutionStartDate",
        show: false,
        id: "institutionStartDate",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "institutionEndDate",
        show: false,
        id: "institutionEndDate",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "title",
        show: false,
        id: "title",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "companyName",
        show: false,
        id: "companyName",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "experienceStartDate",
        show: false,
        id: "experienceStartDate",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "experienceEndDate",
        show: false,
        id: "experienceEndDate",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "description",
        show: false,
        id: "description",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "refName",
        show: false,
        id: "refName",
        id2: uniqid()
      },
      {
        text: "",
        type: "email",
        name: "refEmail",
        show: false,
        id: "refEmail",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "refNumber",
        show: false,
        id: "refNumber",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "refPosition",
        show: false,
        id: "refPosition",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "refCompany",
        show: false,
        id: "refCompany",
        id2: uniqid()
      },
      [
        {text: "https://amochaane.github.io/Quizzical", id: uniqid()}, 
        {text: "https://amochaane.github.io/Weather-App", id: uniqid()}, 
        {text: "https://amochaane.github.io/Dashboard", id: uniqid()}, 
        {text: "https://amochaane.github.io/Todo-List", id: uniqid()}, 
        {text: "https://amochaane.github.io/Tic-Tac-Toe", id: uniqid()}, 
        {text: "https://amochaane.github.io/Calculator", id: uniqid()}, 
        {text: "https://amochaane.github.io/Rock-Paper-Scissors", id: uniqid()}, 
      ],
      [ // This array holds all the skills we have
        {text: "HTML5", id: uniqid()}, 
        {text: "CSS", id: uniqid()}, 
        {text: "Javascript", id: uniqid()}, 
        {text: "ReactJs", id: uniqid()}, 
        {text: "Webpack", id: uniqid()}, 
        {text: "Fetch APIs", id: uniqid()},
        {text: "Problem Solving", id: uniqid()},
        {text: "Attention to detail", id: uniqid()},
        {text: "Team Player", id: uniqid()}
      ]
    ],
      image: "https://gdurl.com/rc90/",
      // image: pic,
      education: [{ // This array holds all the educations we have
        course: 'BSc IT',
        university: "Richfield College",
        startDate: "2023",
        endDate: "2024",
        id: uniqid()
      }],
      experience: [{ // This array holds all the experiences we have
        title: "Senior Web Developer",
        companyName: 'Google',
        experienceStartDate: "2020",
        experienceEndDate: "2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate.",
        id: uniqid(),
        show: false
      }],
      references: [{
        name: "John Sturgis",
        position: "Senior Developer",
        company: "Netflix",
        number: "084 183 2945",
        email: "john.sturgis@gmail.com",
        id: uniqid(),
        show: false
      }, 
      {
        name: "David Myers",
        position: "UI/UX Designer",
        company: "Google",
        number: "079 843 9372",
        email: "david.myers@gmail.com",
        id: uniqid(),
        show: false
      }
    ],
      show: false,  // When show is true, our form will be displayed
      showSkillBox: false, // When showSkillBox is true, our skill input box is displayed
      showEducationBox: false, // When showEducationBox is true, our education input box is displayed
      showExperienceBox: false, // When showExperienceBox is true, our experience input box is displayed
      showExperienceEditBox: false,// When showExperienceEditBox is true, our experience edit input box is displayed
      showSummary: false, // When showSummary is true, our profile/summary input box is displayed
      showReferences: false,
      showReferencesEdit: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.text = this.text.bind(this);
    this.click = this.click.bind(this);
    this.submit = this.submit.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
    this.showSkillBox = this.showSkillBox.bind(this);
    this.reset = this.reset.bind(this);
    this.showEducationBox = this.showEducationBox.bind(this);
    this.showExperienceBox = this.showExperienceBox.bind(this);
    this.edit = this.edit.bind(this);
    this.showExperienceEditBox = this.showExperienceEditBox.bind(this);
    this.val = this.val.bind(this);
    this.showInput = this.showInput.bind(this);
    this.capital = this.capital.bind(this);
    this.previewImage = this.previewImage.bind(this);
    this.showSummary = this.showSummary.bind(this);
    this.showProjectBox = this.showProjectBox.bind(this);
    this.showReferences = this.showReferences.bind(this);
    this.showReferencesEdit = this.showReferencesEdit.bind(this);
  }

  // This function runs everytime we edit an input box
  handleChange(event, id) {
    const {value} = event.target;

    this.setState(prev => {
      const arr = prev.info;
      const index = arr.findIndex((elem) => {
        return elem.name === id
      })
      arr[index] = {...arr[index], text: value}
      return {...prev, info: arr}
    });
  }

  // This function returns the current text of the specified input box so that it can be displayed inside the input box
  text(text) {
    const index = this.state.info.findIndex(i => {
        return i.name === text
    });
    return this.state.info[index].text
  }

  // This function runs when we edit an item in the experience or references section. It returns the text of the item we are editing and 
  // displays it in our input box
  val(text, id, sec) {
    if(sec === "experience") {
      const index = this.state.experience.findIndex(i => {
        return i.id === id 
      });
      return this.state.experience[index][text]
    } else if(sec === "references") {
      const index = this.state.references.findIndex(i => {
        return i.id === id 
      });
      return this.state.references[index][text]
    }
  }

  click(array) {
    // this first setState function makes it so no inputs are shown on the form
    this.setState(prev => {
      const arr = prev.info.map(i => {
        return !i.length ? {...i, show: false} : i
      });
      return {...prev, info: arr}
    });
  // This second one first changes the show property of the needed objects to 'true' so that they are included
  // in the form. 
  // After that it then displays the form
    array.forEach(i => {
      this.setState(prev => {
        const arr = prev.info;
        const index = arr.findIndex((elem) => {
          return elem.name === i
        })
        arr[index] = {...arr[index], show: true}
        return {...prev, info: arr}
      }, () => {
        this.setState({show: true})
      });
    });
  }

  // This function just returns the neat version of the provided text
  capital(str) {
    return str === "firstName" ? "First Name" :
    str === "lastName" ? "Last Name" :
    str === "institutionStartDate" ? "Start Date" :
    str === "institutionEndDate" ? "End Date" : 
    str === "companyName" ? "Company Name" :
    str === "experienceStartDate" ? "Start Date" :
    str === "experienceEndDate" ? "End Date" :
    str === "profile" ? "Paragraph 1" :
    str === "profile2" ? "Paragraph 2" :
    str === "profile3" ? "Paragraph 3" :
    str === "age" ? "Date of Birth" :
    str === "refName" ? "Name" :
    str === "refEmail" ? "Email" :
    str === "refPosition" ? "Position" :
    str === "refNumber" ? "Number" :
    str === "refCompany" ? "Company" :
    str[0].toUpperCase() + str.slice(1).toLowerCase()
}

  // resets the below state properties so that there is no unwanted behaviour with our form
  submit(str) {
    this.setState({show: false}); // this removes the edit box
    this.setState({showSkillBox: false})
    this.setState({showEducationBox: false})
    this.setState({showExperienceBox: false})
    this.setState({showExperienceEditBox: false})
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});

  }

  // Updates the below property to true so that only infomation related to that property is shown on our form.
  // Then it turns everything else to false
  showSkillBox() {
    this.setState({showSkillBox: true});
    this.setState({showEducationBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showExperienceEditBox: false});
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
  }

  // Updates the below property to true so that only infomation related to that property is shown on our form.
  // Then it turns everything else to false
  showEducationBox() {
    this.setState({showEducationBox: true});
    this.setState({showSkillBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showExperienceEditBox: false});
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
  }

  showExperienceBox() {
    this.setState({showExperienceBox: true});
    this.setState({showSkillBox: false});
    this.setState({showEducationBox: false});
    this.setState({showExperienceEditBox: false});
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
  }

  // Updates the below property to true so that only infomation related to that property is shown on our form.
  // Then it turns everything else to false
  showExperienceEditBox() {
    this.setState({showExperienceEditBox: true}, () => this.setState({show: true}))
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
  }

  // Updates the below property to true so that only infomation related to that property is shown on our form.
  // Then it turns everything else to false
  showSummary() {
    this.setState({showSummary: true});
    this.setState({showProjectBox: false});
    this.setState({showSkillBox: false});
    this.setState({showEducationBox: false});
    this.setState({showExperienceEditBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
  }

  // Updates the below property to true so that only infomation related to that property is shown on our form.
  // Then it turns everything else to false
  showProjectBox() {
    this.setState({showProjectBox: true});
    this.setState({showSkillBox: false});
    this.setState({showEducationBox: false});
    this.setState({showExperienceEditBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showSummary: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
  }

  showReferences() {
    this.setState({showReferences: true});
    this.setState({showProjectBox: false});
    this.setState({showSkillBox: false});
    this.setState({showEducationBox: false});
    this.setState({showExperienceEditBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showSummary: false});
    this.setState({showReferencesEdit: false});
  }

  showReferencesEdit() {
    this.setState({showReferencesEdit: true}, () => this.setState({show: true}))
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
  }


  // Runs everytime we delete an item in either Skills, Education, References or Experience
  delete(id, sec) {
    this.setState(prev => {
      let arr;
      if(sec === "skills") {
        arr = prev.info[prev.info.length - 1];
        arr = arr.filter(i => {
          return i.id !== id
        });
        const obj = [...prev.info];
        obj[obj.length - 1] = arr;
        return {...prev, info: obj}
      }
      else if(sec === "projects") {
        arr = prev.info[prev.info.length - 2];
        arr = arr.filter(i => {
          return i.id !== id
        });
        const obj = [...prev.info];
        obj[obj.length - 2] = arr;
        return {...prev, info: obj}
      }
      else if(sec === "education") {
        arr = prev.education;
        arr = arr.filter(i => {
          return i.id !== id
        });
        return {...prev, education: arr}
      }
      else if(sec === "references") {
        arr = prev.references;
        arr = arr.filter(i => {
          return i.id !== id
        });
        return {...prev, references: arr}
      }
      else if(sec === "experience") {
        arr = prev.experience;
        arr = arr.filter(i => {
          return i.id !== id
        });
        return {...prev, experience: arr}
      }
    });
  }

  // Runs everytime we add an item to either Skills, Experience, References or Education
  add(sec) {
    this.setState(prev => {
      let arr;
      if(sec === "skills") {
        arr = [...prev.info[prev.info.length - 1]];
        arr.push({text: this.state.info[this.state.info.findIndex(k => k.name === "skill")].text, id: uniqid()})
        const obj = [...prev.info];
        obj[obj.length - 1] = arr;
        return {...prev, info: obj}
      } else if(sec === "education") {
        arr = [...prev.education];
        arr.push({
          course: this.state.info[this.state.info.findIndex(k => k.name === "course")].text,
          university: this.state.info[this.state.info.findIndex(k => k.name === "institution")].text,
          startDate: this.state.info[this.state.info.findIndex(k => k.name === "institutionStartDate")].text,
          endDate: this.state.info[this.state.info.findIndex(k => k.name === "institutionEndDate")].text,
          id: uniqid()
        })
        return {...prev, education: arr}
      } else if(sec === "experience") {
        arr = [...prev.experience];
        arr.push({
          title: this.state.info[this.state.info.findIndex(k => k.name === "title")].text,
          companyName: this.state.info[this.state.info.findIndex(k => k.name === "companyName")].text,
          experienceStartDate: this.state.info[this.state.info.findIndex(k => k.name === "experienceStartDate")].text,
          experienceEndDate: this.state.info[this.state.info.findIndex(k => k.name === "experienceEndDate")].text,
          id: uniqid(),
          description: this.state.info[this.state.info.findIndex(k => k.name === "description")].text,
          show: false
        })
        return {...prev, experience: arr}
      } else if(sec === "references") {
        arr = [...prev.references];
        arr.push({
          name: this.state.info[this.state.info.findIndex(k => k.name === "refName")].text,
          company: this.state.info[this.state.info.findIndex(k => k.name === "refCompany")].text,
          number: this.state.info[this.state.info.findIndex(k => k.name === "refNumber")].text,
          email: this.state.info[this.state.info.findIndex(k => k.name === "refEmail")].text,
          id: uniqid(),
          position: this.state.info[this.state.info.findIndex(k => k.name === "refPosition")].text,
          show: false
        })
        return {...prev, references: arr}
      }
    });
  }

  // Resets the below state object
  // Makes it so that the next time we add an item in either Skills, Education, References or Experience, it doesn't show us what we
  // entered the previous time
  reset() {
    this.setState(prev => {
      let arr = [...prev.info]
      arr = arr.map(i => {
        return i.name === "skill" ? {...i, text: ""} : 
        i.name === "course" ? {...i, text: ""} :
        i.name === "institution" ? {...i, text: ""} :
        i.name === "institutionStartDate" ? {...i, text: ""} :
        i.name === "institutionEndDate" ? {...i, text: ""} :
        i.name === "title" ? {...i, text: ""} :
        i.name === "companyName" ? {...i, text: ""} :
        i.name === "experienceStartDate" ? {...i, text: ""} :
        i.name === "experienceEndDate" ? {...i, text: ""} :
        i.name === "refName" ? {...i, text: ""} :
        i.name === "refNumber" ? {...i, text: ""} :
        i.name === "refEmail" ? {...i, text: ""} :
        i.name === "refPosition" ? {...i, text: ""} :
        i.name === "refCompany" ? {...i, text: ""} :
        i

      });
      return {...prev, info: arr}
    });
  }

  // This runs everytime we edit an item in the Experience or References section
  edit(event, id, text, sec) {
    const {value} = event.target;

    this.setState(prev => {
      if(sec === "experience") {
        let exp = [...prev.experience];
        exp = exp.map(i => {
          return i.id === id ? {...i, [text]: value} : i
        })
        return {...prev, experience: exp}
      } else if(sec === "references") {
        let ref = [...prev.references];
        ref = ref.map(i => {
          return i.id === id ? {...i, [text]: value} : i
        })
        return {...prev, references: ref}
      }
    });
  }

  // Turns the show property of the specified item to true
  // Allows us to edit(in the experience and references section) the item we clicked on instead of whatever the first one was
  // Whichever one we're editing, its the one that's going to be displayed on the form
  showInput(id, sec) {
    this.setState(prev => {
      if(sec === "experience") {
        let exp = [...prev.experience];
        exp = exp.map(i => {
          return i.id === id ? {...i, show: true} : {...i, show: false}
        })
        return {...prev, experience: exp}
      }
      else if(sec === "references") {
        let ref = [...prev.references];
        ref = ref.map(i => {
          return i.id === id ? {...i, show: true} : {...i, show: false}
        })
        return {...prev, references: ref}
      }
    });
  }



  previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      this.setState(prevState => ({
        ...prevState,
        image: reader.result
      }));
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    const MyDocument = (
      <Document>
        <Page>
          <View>
            <Text>My Website</Text>
          </View>
        </Page>
      </Document>
    );

    return (
      <div className="container">
        
        <SideInfo state={this.state} 
          text={this.text} 
          click={this.click} 
          delete={this.delete} 
          add={this.add} 
          showSkillBox={this.showSkillBox}
          showEducationBox={this.showEducationBox}
          showExperienceBox={this.showExperienceBox}
          reset={this.reset}
          showProjectBox={this.showProjectBox}
        />
        <MainInfo 
          state={this.state} 
          text={this.text} 
          click={this.click}
          showExperienceBox={this.showExperienceBox}
          showReferences={this.showReferences}
          showReferencesEdit={this.showReferencesEdit}
          reset={this.reset}
          delete={this.delete} 
          add={this.add} 
          edit={this.edit}
          showExperienceEditBox={this.showExperienceEditBox}
          showInput={this.showInput}
          previewImage={this.previewImage}
          capital={this.capital}
          showSummary={this.showSummary}
        />
        <div>
        </div>
        {
          this.state.show && 
          <Form 
            info={this.state.info} 
            handleChange={this.handleChange} 
            state={this.state} 
            text={this.text} 
            click={this.click} 
            submit={this.submit} 
            add={this.add}
            reset={this.reset}
            edit={this.edit}
            val={this.val}
            capital={this.capital}
            showSummary={this.showSummary}
          />
        }
        {/* <PDFDownloadLink document={MyDocument} fileName="my_website.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}
        </PDFDownloadLink> */}
      </div>
    )
  }
}

export default App