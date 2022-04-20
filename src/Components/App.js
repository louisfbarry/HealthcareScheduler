import Signup from "./Signup";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";
import LandingPage from "./LandingPage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;
