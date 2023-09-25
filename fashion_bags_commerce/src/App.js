import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ProductViewer from './pages/Admin/ProductManager/ProductViewer';
<<<<<<< HEAD
import ShiftViewer from './pages/Admin/Shift/ShiftViewer';

=======
import Login from './pages/Login';
>>>>>>> main

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/product-viewer" element={<ProductViewer />}></Route>
<<<<<<< HEAD
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/shift" element={<ShiftViewer />}></Route>
=======
>>>>>>> main
        </Routes>
      </div>
    </Router>
  );
}

export default App;
