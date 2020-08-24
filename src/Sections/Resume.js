import React from "react";
import "./styles/Resume.css"
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import { Container, Row, Col } from "react-bootstrap";

function Resume(){
  const boldStyle = {color:"#fbd46d", fontWeight:"bold"};
  const noMarginTop = {marginTop:"0"};
  const noMarginBottom = {marginBottom:"0"}

  return(
    <Container className={"main-content"}>
      <h3 className={"resume-main-title"}>{`<Resume/>`}</h3>
      <Row>
        <Col md={6} sm={12} className={"resume-box"}>
          <div className={"education-box"}>
            <span className={"resume-titles"}>Education</span>
            <SchoolOutlinedIcon className={"resume-icon"}/>
            <div className={"resume-content"}>
              <p><a href={"https://duke.edu/"} target={"_blank"} rel={"noopener noreferrer"}><span style={boldStyle}>Duke University</span></a> (2019 - Present)</p>
              <p><span style={boldStyle}>Major:</span> Computer Science & Economics (B.S.)</p>
              <p><span style={boldStyle}>Coursework:</span> Data Structures & Algorithms, Discrete Mathematics*, Mobile Programming*, Databases*</p>
              <p style={{fontSize: "18px"}}>*Taking in Fall 2020</p>
            </div>
          </div>
        </Col>
        <Col md={6} sm={12} className={"resume-box"}>
          <div className={"experience-box"}>
            <span className={"resume-titles"}>Experience</span>
            <BuildOutlinedIcon className={"resume-icon"}/>
            <div className={"resume-content"}>
              <p style={noMarginBottom}><span style={boldStyle}>Software Engineer Intern</span></p>
              <p style={noMarginTop}>Stealth Startup (May-Aug 2020)</p>
              <p style={noMarginBottom}><span style={boldStyle}>Tech Consultant</span></p>
              <p style={noMarginTop}><a href={"https://www.tamidatduke.org/"} target={"_blank"} rel={"noopener noreferrer"}>Duke TAMID Group</a> (Aug 2019-Present)</p>
              <p style={noMarginBottom}><span style={boldStyle}>Research Intern</span></p>
              <p style={noMarginTop}><a href={"https://www.infrastructureasia.org/"} target={"_blank"} rel={"noopener noreferrer"}>Infrastructure Asia</a> (Apr 2019-Jun 2019)</p>
            </div>
          </div>
        </Col>
      </Row>
        <Row>
          <Col md={12} className={"resume-box"}>
            <div className={"tools-box"}>
              <span className={"resume-titles"}>Technologies</span>
              <CodeOutlinedIcon className={"resume-icon"}/>
              <p>Python, Java, Javascript, Golang, React.js, Node.js, HTML, CSS, Git, SQL*, Swift*</p>
              <p style={{fontSize: "18px"}}>*Currently learning</p>
            </div>
          </Col>
        </Row>
    </Container>
  )
}

export default Resume;