import { Document, Page, Text, View, StyleSheet, PDFViewer, Font, Image} from "@react-pdf/renderer";
import location from "./images/location.png"
import "./pdf.css"
import Asap from './fonts/Asap-ThinItalic.ttf';
import AsapLight from './fonts/Asap-LightItalic.ttf';
import profile from "./images/profile.png"
import profile2 from "./images/profile2.png"
import email from "./images/email.png"
import phone from "./images/phone.png"
import website from "./images/website.png"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"



// Create Document Component
function Pdf(props) {
  const {state} = props;

  Font.register({
    family: 'Asap',
    src: Asap,
  });
  Font.register({
    family: 'AsapLight',
    src: AsapLight,
  });
  
  
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
    },
    sidebar: {
      // border: "1px solid red",
      backgroundColor: "rgba(203,199,198,0.4)",
      padding: "20px",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      rowGap: "50px",
      minWidth: "20%",
      address: {
        display: "flex",
        columnGap: "5px",
      }
    },
    main: {
      // border: "1px solid blue",
      backgroundColor: "rgb(231,229,232,0.4)",
      paddingBottom: "3%",
      // position: "relative",
      display: "flex",
      flexDirection: "column",
      rowGap: "85px",
      // alignItems: "center",
      width: "100%"
    },
    viewer: {
      width: window.innerWidth,
      minHeight: window.innerHeight,
    },
    paragraphAddress: {
      fontSize: "16px",
      fontFamily: "Asap",
      color: "#5d5c5c"
    },
    nameAndRole: {
      color: "#5d5c5c",
      fontSize: "27px",
      letterSpacing: "1.5px",
    },
    sidebarTitle: {
      letterSpacing: "5px",
      fontSize: "19px",
      color: "#5d5c5c",
    },
    educationItems: {
      display: "flex",
      flexDirection: "column",
      rowGap: "18px"
    },
    educationInfo: {
      fontSize: "16px",
      color: "#5d5c5c",
      fontFamily: "Asap"
    },
    educationInfo2: {
      fontSize: "14px",
      color: "#5d5c5c",
      fontFamily: "AsapLight"
    },
    skill: {
      color: "#5d5c5c",
      fontSize: "14px",
      fontFamily: "Asap",
    },
    skills: {
      display: "flex",
      flexDirection: "column",
      rowGap: "8px"
    },
    personalItem: {
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "center", 
      width: "100px",
      // border: "1px solid lime"
    },
    personalItemHolder: {
      display: "flex", 
      flexDirection: "row", 
      columnGap: "15px",
      alignItems: "center"
      // border: "1px solid red"
    },
    personalItemText: {
      fontSize: "16px",
      fontFamily: "Asap",
      color: "#5d5c5c",
      // border: "1px solid blue",
      width: "100%"
    },
    dob: {
      fontSize: "16px",
      fontFamily: "AsapLight",
      color: "#5d5c5c",
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: "5px"
    },
    profileText: {
      fontSize: "16px",
      fontFamily: "Asap",
      color: "#5d5c5c",
      marginLeft: "30px"
    },
    experienceText: {
      fontSize: "15px",
      fontFamily: "AsapLight",
      color: "#5d5c5c",
      // border: "1px solid lime"
    },
    experienceText2: {
      fontSize: "16px",
      fontFamily: "Asap",
      color: "#5d5c5c",
      paddingRight: "50px",
      // border: "1px solid red"
    },
    bullet: {
      fontSize: "29px",
      fontFamily: "AsapLight",
      color: "#5d5c5c",
    },
    referencesText: {
      fontSize: "15px",
      color: "#5d5c5c",
      fontFamily: "AsapLight",
      marginLeft: "30px"
    }
  });

  const educationData = state.education.map(i => {
    return (
      <View key={i.id}>
        <Text style={styles.educationInfo2}>{i.course.toUpperCase()}</Text>
        <Text style={styles.educationInfo2}>{i.university.toUpperCase()}</Text>
        <Text style={styles.educationInfo}>{i.startDate} - {i.endDate}</Text>
      </View>
    )
  });

  const skillsData = state.info[state.info.length - 1].map(i => {
    return (
      <View key={i.id} style={{display: "flex", flexDirection: "row", alignItems: "center"}}><Text style={{color: "#5d5c5c", marginRight: "5px"}}>&bull;</Text><Text style={styles.skill}> {i.text}</Text></View>
    )
  });

  const experienceData = state.experience.map(i => {
    return (
      <View key={i.id} style={{marginLeft: "30px", display: "flex", flexDirection: "column", rowGap: "-9px"}}>
        <Text style={styles.experienceText}>{i.title.toUpperCase()}</Text>
        <View style={{display: "flex", flexDirection: "row", columnGap: "5px", alignItems: "center", marginBottom: "7px"}}>
          <Text style={styles.experienceText}>{i.companyName.toUpperCase()}</Text>
          <Text style={styles.bullet}>&bull;</Text>
          <Text style={styles.experienceText}>{i.experienceStartDate} to {i.experienceEndDate}</Text>
        </View>
        <Text style={styles.experienceText2}>
        {i.description}
        </Text>
      </View>
    )
  })

  const referencesData = state.references.map(i => {
    return (
      <View key={i.id} style={{display: "flex", flexDirection: "column", rowGap: "7px"}}>
        <Text style={styles.referencesText}>{i.name.toUpperCase()}</Text>
        <Text style={styles.referencesText}>{i.position.toUpperCase()}</Text>
        <Text style={styles.referencesText}>{i.company.toUpperCase()}</Text>
        <Text style={styles.referencesText}>{i.number}</Text>
        <Text style={styles.referencesText}>{i.email}</Text>
      </View>
    )
  })


  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A2" style={styles.page}>
          <View style={styles.sidebar}>
            {/* ----------------------------Address-------------------------------------- */}
              {
              state.showAddress &&
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", position: "relative", right: "8px"}}>
                  <Image src={location} style={{height: "40px", marginRight: "5px"}} />
                  <View style={styles.sidebar.address}>
                      <Text style={styles.paragraphAddress}>{state.info.find(i => i.name === "street").text}</Text>
                      <Text style={styles.paragraphAddress}>{state.info.find(i => i.name === "suburb").text}</Text>
                      <Text style={styles.paragraphAddress}>{state.info.find(i => i.name === "city").text}</Text>
                      <Text style={styles.paragraphAddress}>{state.info.find(i => i.name === "country").text}</Text>
                  </View>
                </View>
              }
              {/* --------------------------Name and Role------------------------------------- */}
              <View> 
                <Text style={styles.nameAndRole}>{state.info.find(i => i.name === "firstName").text.toUpperCase()}</Text>
                <Text style={styles.nameAndRole}>{state.info.find(i => i.name === "lastName").text.toUpperCase()}</Text>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", columnGap: "8px"}}>
                  <View style={{height: "10px", width: "30px", backgroundColor: "#5d5c5c"}}></View>
                  <Text style={{fontSize: "14px", color: "#5d5c5c"}}>{state.info.find(i => i.name === "role").text.toUpperCase()}</Text>
                </View>
              </View>
              {/* -------------------------Education------------------------------------- */}
              <View>
                <View style={{marginBottom: "14px"}}>
                  <Text style={styles.sidebarTitle}>EDUCATION</Text>
                  <View style={{height: "0.8px", width: "25%", backgroundColor: '#5d5c5c', marginTop: "3px"}}></View>
                </View>
                <View style={styles.educationItems}>
                  {educationData}
                </View>
              </View>
              <View>
                <View style={{marginBottom: "17px"}}>
                    <Text style={styles.sidebarTitle}>SKILLS</Text>
                    <View style={{height: "0.8px", width: "25%", backgroundColor: '#5d5c5c', marginTop: "3px"}}></View>
                </View>
                <View style={styles.skills}>
                  {skillsData}
                </View>
              </View>
          </View>
          {/* -------------------------------------------------------------------------------------- */}
          <View style={styles.main}>
            {/* ------------------------Personal info------------------- */}
            <View style={{width: "100%", display: "flex", flexDirection: "row", columnGap: "30px"}}>
              <View style={{height: "230px", width: "330px", position: "relative"}}>
                <Image src={state.image !== "https://gdurl.com/rc90/" ? state.image : profile2} style={{height: "100%", width: "100%", borderBottomLeftRadius: "8px", borderBottomRightRadius: '8px'}} />
                <Text style={styles.dob}>{state.info.find(i => i.name === "age").text}</Text>
              </View>
              <View style={{display: "flex", flexDirection: "column", rowGap: "17px", justifyContent: "flex-end"}}>
                <View style={styles.personalItemHolder}>
                  <View style={styles.personalItem}><Image src={email} style={{width: "auto", height: "14px"}} /></View>
                  <Text style={styles.personalItemText}>{state.info.find(i => i.name === "email").text}</Text>
                </View>
                <View style={styles.personalItemHolder}>
                  <View style={styles.personalItem}><Image src={phone} style={{width: "auto", height: "14px"}} /></View>
                  <Text style={styles.personalItemText}>{state.info.find(i => i.name === "number").text}3</Text>
                </View>
                { state.info.find(i => i.name === "website").text && 
                  <View style={styles.personalItemHolder}>
                    <View style={styles.personalItem}><Image src={website} style={{width: "auto", height: "14px"}} /></View>
                    <Text style={styles.personalItemText}>{state.info.find(i => i.name === "website").text}</Text>
                  </View>
                }
                { state.info.find(i => i.name === "linkedin").text &&
                  <View style={styles.personalItemHolder}>
                    <View style={styles.personalItem}><Image src={linkedin} style={{width: "auto", height: "14px"}} /></View>
                    <Text style={styles.personalItemText}>{state.info.find(i => i.name === "linkedin").text}</Text>
                  </View>
                }
                { state.info.find(i => i.name === "github").text &&
                  <View style={styles.personalItemHolder}>
                  <View style={styles.personalItem}><Image src={github} style={{width: "auto", height: "14px"}} /></View>
                  <Text style={styles.personalItemText}>{state.info.find(i => i.name === "github").text}</Text>
                </View>
                }
              </View>
            </View>
            {/* --------------------------------Profile------------------------------------------------- */}
            <View>
              <View style={{marginBottom: "17px"}}>
                <Text style={{margin: "0 0 5px 30px", letterSpacing: "5px", fontSize: "19px", color: "#5d5c5c"}}>PROFILE</Text>
                <View style={{height: "0.8px", width: "25%", backgroundColor: '#5d5c5c', marginTop: "3px"}}></View>
              </View>
              <View style={{display: "flex", flexDirection: "column", rowGap: "15px", paddingRight: "50px"}}>
                <Text style={styles.profileText}>
                {state.info.find(i => i.name === "profile").text}
                </Text>
                <Text style={styles.profileText}>
                {state.info.find(i => i.name === "profile2").text} 
                </Text>
                <Text style={styles.profileText}>
                {state.info.find(i => i.name === "profile3").text}
                </Text>
              </View>
            </View>
            {/* --------------------------------Experience------------------------------------------------- */}
              {
              state.showExperience &&
                <View>
                  <View style={{marginBottom: "17px"}}>
                      <Text style={{margin: "0 0 5px 30px", letterSpacing: "5px", fontSize: "19px", color: "#5d5c5c"}}>EXPERIENCE</Text>
                      <View style={{height: "0.8px", width: "25%", backgroundColor: '#5d5c5c', marginTop: "3px"}}></View>
                  </View>

                  {/* ------------Experience Items Holder------------------------------ */}
                  <View style={{display: "flex", flexDirection: "column", rowGap: "50px"}}>
                    {experienceData}
                  </View>
                </View>
              }
            {/* --------------------------------References------------------------------------------------- */}
            {
              state.showReferencesSection &&
              <View>
                <View style={{marginBottom: "17px"}}>
                      <Text style={{margin: "0 0 5px 30px", letterSpacing: "5px", fontSize: "19px", color: "#5d5c5c"}}>REFERENCES</Text>
                      <View style={{height: "0.8px", width: "25%", backgroundColor: '#5d5c5c', marginTop: "3px"}}></View>
                </View>
                {/* ------------Reference Items Holder------------------------------ */}
                <View style={{display: "flex", flexDirection: "column", rowGap: "50px"}}>
                  {referencesData}
                </View>
              </View>
            }
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default Pdf;
