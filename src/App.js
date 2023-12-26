import './App.css';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import CoinPage from './pages/Coin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/coin/:id' element={<CoinPage/>} />
        </Routes>  
        </BrowserRouter>   
    </div>
  );
}

export default App;
