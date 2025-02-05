import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
    </Router>
  )
}

export default App
