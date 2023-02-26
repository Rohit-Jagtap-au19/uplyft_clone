import "./App.css";
import Home from "./pages/homepage/Home";
import Landingpage from "./pages/landingpage/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/askdoubtpage/Help";
import Announcment from "./pages/announcmentpage/Announcment";
import Dashboard from "./pages/dashboardpage/Dashboard";
import Profile from "./pages/profilepage/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/announcements" element={<Announcment />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
