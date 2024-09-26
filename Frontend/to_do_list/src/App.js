import './App.css';
import Header from './Component/Header';
import { Routes,Route } from 'react-router-dom';
import Home from './Component/Page/Home';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
