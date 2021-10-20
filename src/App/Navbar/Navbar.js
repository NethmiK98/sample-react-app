import { Tabs } from "antd";

const { TabPane } = Tabs;

const Navbar = () => {
  return (
    <div>
      <Tabs centered>
        <TabPane tab="Home">
          Home
        </TabPane>
        <TabPane tab="Services">
          Services
        </TabPane>
        <TabPane tab="About">
          About
        </TabPane>
        <TabPane tab="Portfolio">
          Portfolio
        </TabPane>
        <TabPane tab="Contact">
          Contact
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Navbar;