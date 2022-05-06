import './App.css';
import HomePage from './pages/Home/Homepage.component';
import { Routes, Route } from "react-router-dom";
const HatsPage = () =>{
  return(
    <div><h1>HATS</h1></div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/hats" element={<HatsPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
