import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from './pages/Admin';
import ProductViewer from './pages/Admin/ProductManager/ProductViewer';

import ShiftViewer from './pages/Admin/Shift/ShiftViewer';

import Login from './pages/Login';
import Home from './pages/Home';
import ProductAdd from './pages/Admin/ProductManager/ProductEdit/ProductAdd';

const dynamicRoutes = [
  { path: '/admin', component: <Admin />, title: 'Trang chủ' },
  { path: '/product-viewer', component: <ProductViewer />, title: 'Về chúng tôi' },
  { path: '/login', component: <Login />, title: 'Liên hệ' },
  { path: '/', component: <Home />, title: 'Liên hệ' },
  { path: '/product-add', component: <ProductAdd />, title: 'Liên hệ' },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {dynamicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component}></Route>
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
