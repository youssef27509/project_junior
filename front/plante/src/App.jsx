
import { Routes, Route, Link } from 'react-router-dom';
import Plants from "./component/Plants.jsx";
import Home from './component/home.jsx';
import './App.css';

function App() {
   return (
      <>
        <nav>
      <Link to="/Plants">Plants</Link>
      <Link to="/home">Home</Link>
    </nav>

         <Routes>
            <Route path="/Plants" element={<Plants />} />
             <Route path="/home" element={<Home />} />

         </Routes>
      </>
   );
}

export default App;

