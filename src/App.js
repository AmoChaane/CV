import React from "react";
import SideInfo from "./components/SideInfo"
import MainInfo from "./components/MainInfo"
import "./style.css";
// import pic1 from "./images/pexels-karolina-grabowska-4466540.jpg"
// import pic2 from "./images/pexels-mikhail-nilov-6707631.jpg"

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <SideInfo />
        <MainInfo />
      </div>
    )
  }
}

export default App