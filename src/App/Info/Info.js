import classNames from "./Info.css";
import {  Row, Col } from "antd";
import { Button,Card } from 'antd';


const Info = () => {
  return (
    
    <Card
    style={{ backgroundColor: "#003366" }}
    border="no-border"
    shadow="medium"
    >
      <Row>
        <Col span= {12}>
          <Button className={classNames.navbtn}>Getting started</Button>
          <br></br>
          <br></br>
          <Card  className={classNames.topcard}
          style={{ backgroundColor: "#FFFFFF" }}
          border="no-border"
          shadow="medium">
             <h1 style={{ fontWeight: "600" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. 
              </h1>
          </Card>
            <br></br>
          <Card  className={classNames.topcard}
          style={{ backgroundColor: "#FFFFFF" }}
          border="no-border"
          shadow="medium">
            <h1 style={{ fontWeight: "600" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
              </h1>
          </Card>
          </Col>

          <Col span= {12}>
            <div className={classNames.card}>
              <p>
                <h2 style={{ fontWeight: "500" , color: 'white'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum.
                </h2></p>
              <br></br>
              <br></br>
                <p>
                <h2 style={{ fontWeight: "500" , color: 'white'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, sunt in culpa qui 
                  officia deserunt mollit anim id est laborum.
                </h2></p>
                      
              </div>
            </Col>

          </Row>
      
        </Card>
    
      
  );
};

export default Info;
