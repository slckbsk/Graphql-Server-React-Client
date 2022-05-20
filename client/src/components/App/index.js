import { Routes, Route } from "react-router-dom";
import { Row, Col } from "antd";
import styles from "./styles.module.css";
import Home from "pages/Home";
import NewPost from "pages/NewPost";
import Post from "pages/Post";
import HeaderMenu from "../HeaderMenu";

function App() {
  return (
    <div>
      <Row justify="center">
        <Col span={14}>
          <HeaderMenu />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/newpost" element={<NewPost />}></Route>
              <Route path="/post/:id" element={<Post />}></Route>
            </Routes>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
