
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Navbar = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Home" key="1">
          Home
        </TabPane>
        <TabPane tab="Services" key="2">
          Services
        </TabPane>
        <TabPane tab="About" key="3">
          About
        </TabPane>
        <TabPane tab="Blog" key="4">
          Portfolio
        </TabPane>
        <TabPane tab="Contact us" key="5">
          Contact
        </TabPane>
      </Tabs>
      
    </div>
    
  );
};

export default Navbar;