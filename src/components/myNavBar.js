import Nav from "react-bootstrap/Nav";
import App from "../App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function MyNavBar() {
  return (
    <Nav variant="pills" className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link><Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/About">About</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Algorithm & LeetCode</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default MyNavBar;
