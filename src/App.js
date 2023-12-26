import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Profile from "./components/Profile";
import Missions from "./components/Missions";
import Rockets from "./components/Rockets";


  function App() {
  return (
    <div>
    <Navbar/>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Rockets />}>
        <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;