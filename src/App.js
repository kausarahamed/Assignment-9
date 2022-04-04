import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/Dashboard/Dashboard";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}

export default App;
