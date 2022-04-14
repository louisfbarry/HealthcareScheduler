import Signup from "./Signup";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;
