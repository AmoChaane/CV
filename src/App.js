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
      showAddress: true,
      showReferencesSection: true,
      showExperience: true,
      showProjects: true,
      download: false,
      maxLength: 0,
      info: [{ // This array holds all the info we have except for education and experience
        text: "280 Drawwer Crescent",
        type: "text",
        name: "street",
        show: false,
        id: "street",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "Derdepoort",
        type: "text",
        name: "suburb",
        show: false,
        id: "suburb",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "Pretoria",
        type: "text",
        name: "city",
        show: false,
        id: "city",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "South Africa",
        type: "text",
        name: "country",
        show: false,
        id: "country",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "Amogelang",
        type: "text",
        name: "firstName",
        show: false,
        id: "firstName",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "Chaane",
        type: "text",
        name: "lastName",
        show: false,
        id: "lastName",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "Web Developer",
        type: "text",
        name: "role",
        show: false,
        id: "role",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "amogelangchaane200@gmail.com",
        type: "email",
        name: "email",
        show: false,
        id: "email",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "079 998 2723",
        type: "tel",
        name: "number",
        show: false,
        id: "number",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "www.amochaane.com",
        type: "text",
        name: "website",
        show: false,
        id: "website",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "https://www.linkedin.com/in/amogelang-chaane-6044391bb/",
        type: "text",
        name: "linkedin",
        show: false,
        id: "linkedin",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "https://github.com/AmoChaane",
        type: "text",
        name: "github",
        show: false,
        id: "github",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: "2003-08-22",
        type: "text",
        name: "age",
        show: false,
        id: "age",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: 
        "A Web Developer with a strong passion for coding, I am looking for opportunities to apply and expand my skills. My experience has been focused on front-end development using HTML, CSS, JavaScript, and React to build dynamic and responsive web applications. ",
        type: "text",
        name: "profile",
        show: false,
        id: "profile",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: 
        "I am highly motivated and proactive, with a strong desire to learn and grow. I enjoy taking on new challenges and am always eager to learn new technologies and techniques. I have a strong attention to detail and a commitment to producing high-quality work. In addition to my technical skills, I have excellent communication and problem-solving skills. I am a quick learner, a good team player, and have a positive attitude towards challenges. I am also passionate about building user-centered and accessible web applications. ",
        type: "text",
        name: "profile2",
        show: false,
        id: "profile",
        id2: uniqid(),
        standAlone: true
      },
      {
        text: 
        "I am excited about the opportunity to work with a dynamic team that values creativity, innovation, and collaboration. I am confident that my skills, passion, and commitment to excellence make me an excellent candidate for any junior web developer position.",
        type: "text",
        name: "profile3",
        show: false,
        id: "profile",
        id2: uniqid(),
        standAlone: true
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
        name: "skillEdit",
        show: false,
        id: "skillEdit",
        id2: uniqid(),
        skillId: ""
      },
      {
        text: "",
        type: "text",
        name: "projectHeading",
        show: false,
        id: "projectHeading",
        id2: uniqid()
      },
      {
        text: "",
        type: "text",
        name: "projectSummary",
        show: false,
        id: "projectSummary",
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
      [ // This array holds all the skills we have
        {text: "HTML5", id: uniqid()}, 
        {text: "CSS", id: uniqid()}, 
        {text: "Javascript", id: uniqid()}, 
        {text: "ReactJs", id: uniqid()}, 
        {text: "Typescript", id: uniqid()}, 
        {text: "Bootstrap", id: uniqid()},
        {text: "Firebase", id: uniqid()},
        {text: "Figma", id: uniqid()}, 
        {text: "Webpack", id: uniqid()},
        {text: "Team Player", id: uniqid()}
      ]
    ],
      image: "https://gdurl.com/rc90/",
      // image: pic,
      education: [{ // This array holds all the educations we have
        course: 'BSc IT',
        university: "Richfield College",
        startDate: "2023",
        endDate: "2025",
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
        name: "Lorem Ipsum",
        position: "Senior Developer",
        company: "Netflix",
        number: "084 183 2945",
        email: "john.sturgis@gmail.com",
        id: uniqid(),
        show: false
      }, 
      {
        name: "Dolor Sit",
        position: "UI/UX Designer",
        company: "Google",
        number: "079 843 9372",
        email: "david.myers@gmail.com",
        id: uniqid(),
        show: false
      }
    ],
    projects: [
      {summary: "An AI integrated website that provides code analysis and optimization based on user code input. Built with React along with Bootstrap and Firebase", url: "https://codepilot4.web.app", id: uniqid(), show: false, name: "Code Pilot"}, 
      {summary: "Allows the user to customize the already designed/made CV", url: "https://amochaane.github.io/CV", id: uniqid(), show: false, name: "CV Builder"}, 
      {summary: "Provides multiple questions/quizzes and their answers", url: "https://amochaane.github.io/Quizzical", id: uniqid(), show: false, name: "Quiz App"}, 
      {summary: "Has weather information on most of the cities worldwide", url: "https://amochaane.github.io/Weather-App", id: uniqid(), show: false, name: "Weather App"}, 
      {summary: "A web based game that lets you play against the COM", url: "https://amochaane.github.io/Battleship", id: uniqid(), show: false, name: "Battleship"}, 
      {summary: "A basic todo list application", url: "https://amochaane.github.io/Todo-List", id: uniqid(), show: false, name: "Todo List"}, 
      {summary: "An offline web based multiplayer game", url: "https://amochaane.github.io/Tic-Tac-Toe", id: uniqid(), show: false, name: "Tic Tac Toe"}, 
      {summary: "A basic calculator", url: "https://amochaane.github.io/Calculator", id: uniqid(), show: false, name: "Calculator"}, 
      {summary: "A web based game where you play against the COM", url: "https://amochaane.github.io/Rock-Paper-Scissors", id: uniqid(), show: false, name: "Rock Paper Scissors"},
      {summary: "A dashboard built with HTML and CSS", url: "https://amochaane.github.io/Dashboard", id: uniqid(), show: false, name: "Dashboard"},  
    ],
      show: false,  // When show is true, our form will be displayed
      showSkillBox: false, // When showSkillBox is true, our skill input box is displayed
      showEducationBox: false, // When showEducationBox is true, our education input box is displayed
      showExperienceBox: false, // When showExperienceBox is true, our experience input box is displayed
      showExperienceEditBox: false,// When showExperienceEditBox is true, our experience edit input box is displayed
      showSummary: false, // When showSummary is true, our profile/summary input box is displayed
      showReferences: false,
      showReferencesEdit: false,
      showSkillBoxEdit: false,
      showProjectBox: false,
      showProjectsEdit: false
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
    this.showSkillBoxEdit = this.showSkillBoxEdit.bind(this);
    this.showReferencesEdit = this.showReferencesEdit.bind(this);
    this.alternateAddress = this.alternateAddress.bind(this);
    this.alternateReferences = this.alternateReferences.bind(this);
    this.alternateExperience = this.alternateExperience.bind(this);
    this.alternateProjects = this.alternateProjects.bind(this);
    this.editSkillItem = this.editSkillItem.bind(this);
    this.handleEditSkillChange = this.handleEditSkillChange.bind(this);
    this.publishEdit = this.publishEdit.bind(this);
    this.showProjectsEdit = this.showProjectsEdit.bind(this);
    this.updateMaxLength = this.updateMaxLength.bind(this);
    this.resetAllFields = this.resetAllFields.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // Check if the state has changed
  //   if (this.state !== prevState) {
  //     // Save the state object to localStorage
  //     localStorage.setItem('myState', JSON.stringify({
  //       info: this.state.info,
  //       skils: this.state.info[this.state.info.length - 1],
  //       experience: this.state.experience,
  //       references: this.state.references,
  //       education: this.state.education,
  //       projects: this.state.projects,
  //     }));
  //   }
  // }

  // componentDidMount() {
  //   // Retrieve the state object from localStorage when the component mounts
  //   const savedState = localStorage.getItem('myState');
  //   if (savedState) {
  //     this.setState(JSON.parse(savedState));
  //   }
  // }

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
    }, () => {
      if(id == "projectSummary") {
        this.setState({maxLength: value.length})
      }
    });
  }

  updateMaxLength(num) {
    this.setState(prev => {
      return {
        ...prev,
        maxLength: num
      }
    })
  }

  resetAllFields() {
    this.setState(prev => {
      let arr = [...prev.info];
      arr = arr.map(i => {
        if(!Array.isArray(i) && i.show && !i.standAlone) {
          i.text = ""
          return i
        }
        else {
          return i
        }
      })
      return {
        ...prev, info: arr
      }
    })
  }

  // runs everytime our skilledit input is changed
  handleEditSkillChange(event) {
    const {value} = event.target;

    this.setState(prev => { 
      const arr = [...prev.info]
      arr[arr.findIndex(k => k.name === "skillEdit")].text = value;
      return {
        ...prev,
        info: arr
      }
    });
  }

  editSkillItem(id) {
    this.setState(prev => {
      const skill = prev.info[prev.info.findIndex(k => k.name === "skillEdit")];
      const skillsArray = [...prev.info[prev.info.length - 1]];
      skill.text = skillsArray.find(i => i.id === id).text;
      skill.skillId = id;
      const arr = [...prev.info];
      arr[arr.findIndex(k => k.name === "skillEdit")] = skill;
      return {
        ...prev,
        info: arr
      }
    })
  }

  publishEdit() {
    this.setState(prev => {
      const skillsArray = prev.info[prev.info.length - 1];
      const skill = prev.info[prev.info.findIndex(k => k.name === "skillEdit")];
      skillsArray[skillsArray.findIndex(k => k.id === skill.skillId)].text = skill.text;
      const arr = [...prev.info]
      arr[arr.length - 1] = skillsArray;
      return {
        ...prev,
        info: arr
      }
    })
  }

  alternateAddress() {
    this.setState(prev => {
      return {
        ...prev,
        showAddress: !prev.showAddress
      }
    })
  }

  alternateExperience() {
    this.setState(prev => {
      return {
        ...prev,
        showExperience: !prev.showExperience
      }
    })
  }
  alternateReferences() {
    this.setState(prev => {
      return {
        ...prev,
        showReferencesSection: !prev.showReferencesSection
      }
    })
  }

  alternateProjects() {
    this.setState(prev => {
      return {
        ...prev,
        showProjects: !prev.showProjects
      }
    })
  }

  // This function returns the current text of the specified input box so that it can be displayed inside the input box
  text(text) {
    const index = this.state.info.findIndex(i => {
        return i.name === text
    });
    return this.state.info[index].text
  }

  // This function runs when we edit an item in the experience, references or projects section. It returns the text of the item we are editing and 
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
    else if(sec === "projects") {
      const index = this.state.projects.findIndex(i => {
        return i.id === id 
      });
      return this.state.projects[index][text]
    }
  }

  // All this function does is make sure that the correct input(s) in our form is shown
  click(array) {
    // this first setState function makes it so no unnecessary inputs are shown on the form
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
    str === "skillEdit" ? "Edit Skill" :
    str === "project" ? "Link to project" :
    str === "projectHeading" ? "Name of project" :
    str === "projectSummary" ? "Explain your project (optional)" :
    str[0].toUpperCase() + str.slice(1).toLowerCase()
}

  // resets the below state properties so that there is no unwanted behaviour with our form
  submit() {
    this.setState({show: false}); // this removes the edit box
    this.setState({showSkillBox: false})
    this.setState({showEducationBox: false})
    this.setState({showExperienceBox: false})
    this.setState({showExperienceEditBox: false})
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})

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
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
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
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
  }

  showSkillBoxEdit() {
    this.setState({showSkillBoxEdit: true});
    this.setState({showEducationBox: false});
    this.setState({showSkillBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showExperienceEditBox: false});
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
    this.setState({showProjectsEdit: false})
    // showSkillBoxEdit
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
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
  }

  // Updates the below property to true so that only infomation related to that property is shown on our form.
  // Then it turns everything else to false
  showExperienceEditBox() {
    this.setState({showExperienceEditBox: true}, () => this.setState({show: true}))
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showReferencesEdit: false});
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
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
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
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
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
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
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
  }

  showReferencesEdit() {
    this.setState({showReferencesEdit: true}, () => this.setState({show: true}))
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showSkillBoxEdit: false});
    this.setState({showProjectsEdit: false})
  }

  showProjectsEdit() {
    this.setState({showProjectsEdit: true}, () => this.setState({show: true}));
    this.setState({showReferencesEdit: false});
    this.setState({showSummary: false});
    this.setState({showProjectBox: false});
    this.setState({showReferences: false});
    this.setState({showSkillBoxEdit: false});
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
        arr = prev.projects;
        arr = arr.filter(i => {
          return i.id !== id
        });
        return {...prev, projects: arr}
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

  

  // Runs everytime we add an item to either Skills, Experience, References, Projects or Education
  add(sec) {
    this.setState(prev => {
      let arr;
      if(sec === "skills") {
        arr = [...prev.info[prev.info.length - 1]];
        arr.unshift({text: this.state.info[this.state.info.findIndex(k => k.name === "skill")].text, id: uniqid()})
        const obj = [...prev.info];
        obj[obj.length - 1] = arr;
        return {...prev, info: obj}
      } else if(sec === "education") {
        arr = [...prev.education];
        arr.unshift({
          course: this.state.info[this.state.info.findIndex(k => k.name === "course")].text,
          university: this.state.info[this.state.info.findIndex(k => k.name === "institution")].text,
          startDate: this.state.info[this.state.info.findIndex(k => k.name === "institutionStartDate")].text,
          endDate: this.state.info[this.state.info.findIndex(k => k.name === "institutionEndDate")].text,
          id: uniqid()
        })
        return {...prev, education: arr}
      } else if(sec === "experience") {
        arr = [...prev.experience];
        arr.unshift({
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
        arr.unshift({
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
      else if(sec === "projects") {
        if(this.state.info[this.state.info.findIndex(k => k.name === "projectHeading")].text) {
          arr = [...prev.projects];
          arr.unshift({
            summary: this.state.info[this.state.info.findIndex(k => k.name === "projectSummary")].text,
            url: this.state.info[this.state.info.findIndex(k => k.name === "project")].text,
            name: this.state.info[this.state.info.findIndex(k => k.name === "projectHeading")].text,
            id: uniqid(),
            show: false
          })
          return {...prev, projects: arr}
        } else {
          alert('"Name of Project" must not be empty')
        }
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

  // This runs everytime we edit an item in the Experience, References, or Projects section
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
      else if(sec === "projects") {
        this.setState(previous => {
          return {
            ...previous,
            maxLength: value.length
          }
        })
        let ref = [...prev.projects];
        ref = ref.map(i => {
          return i.id === id ? {...i, [text]: value} : i
        })
        return {...prev, projects: ref}
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
      else if(sec === "projects") {
        let ref = [...prev.projects];
        ref = ref.map(i => {
          return i.id === id ? {...i, show: true} : {...i, show: false}
        })
        return {...prev, projects: ref}
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
    return (
      !this.state.download ?
        <div className="container">
          <span className="pdf-download" onClick={() => {
            this.setState(prev => {
              return {
                ...prev,
                download: true
              }
            })
          }}>
            <i className="fa-solid fa-download"></i>
          </span>
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
            alternateAddress={this.alternateAddress}
            showSkillBoxEdit={this.showSkillBoxEdit}
            editSkillItem={this.editSkillItem}
          />
          <MainInfo 
            state={this.state} 
            text={this.text} 
            click={this.click}
            showExperienceBox={this.showExperienceBox}
            showReferences={this.showReferences}
            showReferencesEdit={this.showReferencesEdit}
            showSkillBoxEdit={this.showSkillBoxEdit}
            showProjectBox={this.showProjectBox}
            showProjectsEdit={this.showProjectsEdit}
            showProjects={this.showProjects}
            
            reset={this.reset}
            delete={this.delete} 
            add={this.add} 
            edit={this.edit}
            showExperienceEditBox={this.showExperienceEditBox}
            showInput={this.showInput}
            previewImage={this.previewImage}
            capital={this.capital}
            showSummary={this.showSummary}
            alternateReferences={this.alternateReferences}
            alternateExperience={this.alternateExperience}
            alternateProjects={this.alternateProjects}
            updateMaxLength={this.updateMaxLength}
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
              showSkillBoxEdit={this.showSkillBoxEdit}
              handleEditSkillChange={this.handleEditSkillChange}
              publishEdit={this.publishEdit}
              updateMaxLength={this.updateMaxLength}
              resetAllFields={this.resetAllFields}
            />
          }
        </div>
        :
        <Pdf state={this.state}/>
    )
  }
}

export default App