import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Upload from './pages/Upload';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/feed" element={<Feed />}></Route>
        </Routes>
        
        <Routes>
          <Route exact path="/upload" element={<Upload />}></Route>
        </Routes>
       
      </Router>
    </div>
  );
}

export default App;
