import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/auth' Component={Auth}/>
      </Routes>
    </Router>
  )
}

export default App
