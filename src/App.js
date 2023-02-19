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
        show: false
      },
      {
        text: "Derdepoort",
        type: "text",
        name: "suburb",
        show: false
      },
      {
        text: "Pretoria",
        type: "text",
        name: "city",
        show: false
      },
      {
        text: "South Africa",
        type: "text",
        name: "country",
        show: false
      },
      {
        text: "Amogelang",
        type: "text",
        name: "firstName",
        show: false
      },
      {
        text: "Chaane",
        type: "text",
        name: "lastName",
        show: false
      },
      {
        text: "Web Developer",
        type: "text",
        name: "role",
        show: false
      },
      {
        text: "amogelangchaane200@gmail.com",
        type: "email",
        name: "email",
        show: false
      },
      {
        text: "079 998 2723",
        type: "tel",
        name: "number",
        show: false
      },
      {
        text: "www.amochaane.com",
        type: "text",
        name: "website",
        show: false
      },
      {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate.",
        type: "text",
        name: "profile",
        show: false
      }
    ],
      image: "",
      education: [{
        course: 'BSc IT',
        university: "Richfield College",
        startDate: "2018",
        endDate: "2022"
      }],
      skills: ["HTML", "CSS", 'Javascript', "Excel", "Google Ads"],
      experience: [{
        title: "Senior Web Developer",
        companyName: 'Google',
        experienceStartDate: "2020",
        experienceEndDate: "2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate.",
        experiencePoints: ["modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur", "modi asperiores dolorum fugiat saepe cupiditate debitis magni reiciendis ipsam eum consequatur"]
      }],
      show: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.text = this.text.bind(this);
    this.click = this.click.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event, id) {
    const {type, name, value} = event.target;
    // this.setState({
    //   [name]: {
    //     text: value
    //   }
    // });
 


    this.setState(prev => {
      const arr = prev.info;
      const index = arr.findIndex((elem) => {
        return elem.name == id
      })
      arr[index] = {...arr[index], text: value}
      return {...prev, info: arr}
    }, console.log(this.state.info));
  }

  text(text) {
    const index = this.state.info.findIndex(elem => {
        return elem.name == text
    });
    return this.state.info[index].text
  }

  click(array) {
    array.forEach(i => {
      this.setState(prev => {
        const arr = prev.info;
        const index = arr.findIndex((elem) => {
          return elem.name == i
        })
        arr[index] = {...arr[index], show: true}
        return {...prev, info: arr}
      }, () => {
        this.setState({show: true})
      });
    });
  }

  submit() {
    this.setState({show: false});
  }

  render() {
    return (
      <div className="container">
        <SideInfo state={this.state} text={this.text} click={this.click}/>
        <MainInfo state={this.state} text={this.text} click={this.click}/>
        {this.state.show && <Form data={this.state.info} handleChange={this.handleChange} state={this.state} text={this.text} click={this.click} submit={this.submit}/>}
      </div>
    )
  }
}

export default App