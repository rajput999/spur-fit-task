
import App from "../App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RoutesConfig = () => {
  return (
    <Router>
      <div className="router">
        <Routes>
          <Route exact path="/" element={<App isAdmin={false}/>} />
          <Route path="/admin" element={<App isAdmin={true}/>} />
        </Routes>
      </div>
    </Router>
  )
};

export default RoutesConfig;
