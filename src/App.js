import React from "react";
import SideInfo from "./components/SideInfo"
import MainInfo from "./components/MainInfo"
import Form from "./components/Form"
import uniqid from 'uniqid';
import "./style.css";
// import pic1 from "./images/pexels-karolina-grabowska-4466540.jpg"
// import pic2 from "./images/pexels-mikhail-nilov-6707631.jpg"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [{
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
        text: "https://www.linkedin.com/in/benjamin-grant-72381ujy3u",
        type: "text",
        name: "linkedin",
        show: false,
        id: "linkedin",
        id2: uniqid()
      },
      {
        text: 
        "As a self-taught junior web developer with a strong passion for coding, I am looking for opportunities to apply and expand my skills. My experience has been focused on front-end development using HTML, CSS, and JavaScript. I have also worked with popular libraries and frameworks like React, Vue, and jQuery to build dynamic and responsive web applications. I am highly motivated and proactive, with a strong desire to learn and grow. I enjoy taking on new challenges and am always eager to learn new technologies and techniques. I have a strong attention to detail and a commitment to producing high-quality work. In addition to my technical skills, I have excellent communication and problem-solving skills. I am a quick learner, a good team player, and have a positive attitude towards challenges. I am also passionate about building user-centered and accessible web applications. I am excited about the opportunity to work with a dynamic team that values creativity, innovation, and collaboration. I am confident that my skills, passion, and commitment to excellence make me an excellent candidate for any junior web developer position.",
        type: "text",
        name: "profile",
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
      [
        {text: "HTML5", id: uniqid()}, 
        {text: "CSS", id: uniqid()}, 
        {text: "Javascript", id: uniqid()}, 
        {text: "ReactJs", id: uniqid()}, 
        {text: "Webpack", id: uniqid()}, 
        {text: "Fetch APIs", id: uniqid()}
      ]
    ],
      // image: 'https://gdurl.com/jdVr/',
      // image: "https://gdurl.com/doTl/",
      image: "https://gdurl.com/rc90/",
      // image: "https://gdurl.com/82GF/",
      education: [{
        course: 'BSc IT',
        university: "Richfield College",
        startDate: "2023",
        endDate: "2024",
        id: uniqid()
      }],
      experience: [{
        title: "Senior Web Developer",
        companyName: 'Google',
        experienceStartDate: "2020",
        experienceEndDate: "2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate.",
        id: uniqid(),
        show: false
        // experiencePoints: ["modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur", "modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur"]
      }],
      show: false,
      showSkillBox: false,
      showEducationBox: false,
      showExperienceBox: false,
      showExperienceEditBox: false
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
  }

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

  text(text) {
    const index = this.state.info.findIndex(i => {
        return i.name === text
    });
    return this.state.info[index].text
  }

  val(text, id) {
    const index = this.state.experience.findIndex(i => {
      return i.id === id 
    });
    return this.state.experience[index][text]
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

  capital(str) {
    // const first = str[0].toUpperCase();
    // const rest = str.slice(1).toLowerCase();
    // return first + rest;
    return str === "firstName" ? "First Name" :
    str === "lastName" ? "Last Name" :
    str === "institutionStartDate" ? "Start Date" :
    str === "institutionEndDate" ? "End Date" : 
    str === "companyName" ? "Company Name" :
    str === "experienceStartDate" ? "Start Date" :
    str === "experienceEndDate" ? "End Date" :
    str[0].toUpperCase() + str.slice(1).toLowerCase()
}

  submit(str) {
    this.setState({show: false}); // this removes the edit box
    this.setState({showSkillBox: false})
    this.setState({showEducationBox: false})
    this.setState({showExperienceBox: false})
    this.setState({showExperienceEditBox: false})
  }

  showSkillBox() {
    this.setState({showSkillBox: true});
    this.setState({showEducationBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showExperienceEditBox: false});
  }

  showEducationBox() {
    this.setState({showEducationBox: true});
    this.setState({showSkillBox: false});
    this.setState({showExperienceBox: false});
    this.setState({showExperienceEditBox: false});
  }

  showExperienceBox() {
    this.setState({showExperienceBox: true});
    this.setState({showSkillBox: false});
    this.setState({showEducationBox: false});
    this.setState({showExperienceEditBox: false});
  }

  showExperienceEditBox() {
    this.setState({showExperienceEditBox: true}, () => this.setState({show: true}))
    // this.setState({showExperienceBox: false});
    // this.setState({showSkillBox: false});
    // this.setState({showEducationBox: false});
    // this.setState({show: true})
  }


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
      else if(sec === "education") {
        arr = prev.education;
        arr = arr.filter(i => {
          return i.id !== id
        });
        return {...prev, education: arr}
      }
      else {
        arr = prev.experience;
        arr = arr.filter(i => {
          return i.id !== id
        });
        return {...prev, experience: arr}
      }

    });
  }

  add(sec) {
    this.setState(prev => {
      // console.log(prev);
      // let arr = sec === "skills" ? [...prev.info[prev.info.length - 1]] : 
      // sec === "education" ? [...prev.education] :
      // [...prev.experience];
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
      } else {
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
      }
      console.log(arr)
      // arr.push({text: value, id: uniqid()})
      // const obj = [...prev.info];
      // obj[obj.length - 1] = arr;
      // return {...prev, info: obj}
    });
  }

  reset() { // this resets the below state object
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
        i.name === "description" ? {...i, text: ""} : i

      });
      return {...prev, info: arr}
    });
  }

  edit(event, id, text) {
    const {value} = event.target;

    this.setState(prev => {
      let exp = [...prev.experience];
      exp = exp.map(i => {
        return i.id === id ? {...i, [text]: value} : i
      })
      return {...prev, experience: exp}
    }, console.log('state changed'));
  }

  showInput(id) {
    this.setState(prev => {
      let exp = [...prev.experience];
      exp = exp.map(i => {
        return i.id === id ? {...i, show: true} : {...i, show: false}
      })
      return {...prev, experience: exp}
    });
  }


  // previewImage(event) {
  //   // var preview = document.getElementById('image-preview');
  //   this.setState(prev => {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  //     let img;

  //     reader.onloadend = function() {
  //       if(file) {
  //         reader.readAsDataURL(file);
  //       }
  //       img = reader.result;
  //     }

  //     return {
  //       ...prev,
  //       image: img
  //     }
  //   });
  // }

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
        />
        <MainInfo 
          state={this.state} 
          text={this.text} 
          click={this.click}
          showExperienceBox={this.showExperienceBox}
          reset={this.reset}
          delete={this.delete} 
          add={this.add} 
          edit={this.edit}
          showExperienceEditBox={this.showExperienceEditBox}
          showInput={this.showInput}
          previewImage={this.previewImage}
        />
        {
          this.state.show && 
          <Form 
            data={this.state.info} 
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
          />
        }
      </div>
    )
  }
}

export default App