import './App.css';
import HomePage from './pages/Home/Homepage.component';
import { Routes, Route } from "react-router-dom";
const HatsPage = () =>{
  return(
    <div><h1>HATS</h1></div>
  );
}
const JacketsPage = () =>{
  return(
    <div><h1>JacketPage</h1></div>
  );
}
const SneakersPage = () =>{
  return(
    <div><h1>SneakersPage</h1></div>
  );
}
const WomensPage = () =>{
  return(
    <div><h1>WomensPage</h1></div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/hats" element={<HatsPage/>}></Route>
        <Route path="/jackets" element={<JacketsPage/>}></Route>
        <Route path="/sneakers" element={<SneakersPage/>}></Route>
        <Route path="/womens" element={<WomensPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
