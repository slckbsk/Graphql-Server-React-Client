import React from "react";
import { Menu } from "antd";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Counter from "components/PostCounter/index";

const items = [
  {
    label: (
      <Link to="/" className={styles.antMenu}>
        HOME
      </Link>
    ),
    key: "/",
  },

  {
    label: (
      <Link to="/newpost" className={styles.antMenu}>
        NEW POST
      </Link>
    ),
    key: "/newpost",
  },

];

const HeaderMenu = () => {
  const [current, setCurrent] = React.useState("/");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className={styles.tabnav}>
      <Menu
        onClick={onClick}
        selectedKeys={current}
        mode="horizontal"
        items={items}
        
      />
      <Counter></Counter>
      <div>
      
      </div>
    </div>
  );
};

export default HeaderMenu;
