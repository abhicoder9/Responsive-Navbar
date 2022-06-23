import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
