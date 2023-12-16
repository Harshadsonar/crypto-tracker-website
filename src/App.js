import './App.css';
import HomePage from './pages/Home';
import DashboardPage from './pages/Dashboard';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
        </Routes>  
        </BrowserRouter>   
    </div>
  );
}

export default App;
