import React from "react";
import SideInfo from "./components/SideInfo"
import MainInfo from "./components/MainInfo"
import Form from "./components/Form"
import "./style.css";
// import pic1 from "./images/pexels-karolina-grabowska-4466540.jpg"
// import pic2 from "./images/pexels-mikhail-nilov-6707631.jpg"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      address: {
        street: "280 Drawwer Crescent",
        suburb: "Derdepoort",
        city: "Pretoria",
        country: "South Africa"
      },
      names: {
        firstName: "Amogelang",
        lastName: "Chaane"
      },
      role: "Web Developer",
      image: "",
      email: "amogelangchaane200@gmail.com",
      number: "079 998 2723",
      website: "www.amochaane.com",
      profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint nesciunt tempora, debitis magni reiciendis ipsam eum consequatur quos quae voluptate recusandae suscipit ratione modi asperiores dolorum fugiat saepe cupiditate.",
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
      }]
    }
  }

  render() {
    return (
      <div className="container">
        <SideInfo state={this.state}/>
        <MainInfo state={this.state}/>
      </div>
    )
  }
}

export default App