import './App.css';
import HomePage from './pages/Home/Homepage.component';
import { Routes, Route } from "react-router-dom";
import ShopPage from './pages/Shoppage/shopPage.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/shop" element={<ShopPage/>}></Route>
        <Route path="/sign-in" element ={<SignInSignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
