import './App.css';
import HomePage from './pages/Home/Homepage.component';
import { Routes, Route } from "react-router-dom";
import ShopPage from './pages/Shoppage/shopPage.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/shop" element={<ShopPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
