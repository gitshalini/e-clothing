import './App.css';
import HomePage from './pages/Home/Homepage.component';
import { Routes, Route } from "react-router-dom";
import ShopPage from './pages/Shoppage/shopPage.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/shop" element={<ShopPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
