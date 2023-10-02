import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from './pages/Admin';
import ProductViewer from './pages/Admin/ProductManager/ProductViewer';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={'<Login />'}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/product-viewer" element={<ProductViewer />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
