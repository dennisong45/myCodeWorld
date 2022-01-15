import logo from "./logo.svg";
import "./App.css";
import MyNavBar from "./components/myNavBar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <h1>Hello welcome to Dennis Site</h1>
    </div>
  );
}

export default App;
