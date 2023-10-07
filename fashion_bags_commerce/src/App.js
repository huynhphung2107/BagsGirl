import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from './pages/Admin';
import ProductViewer from './pages/Admin/ProductManager/ProductViewer';
import ShiftViewer from './pages/Admin/Shift/ShiftViewer';
import Login from './pages/Login';
import Home from './pages/Home';
import ColorView from './pages/Admin/ThuocTinhSanPham/Color/ColorView';
import ProductAdd from './pages/Admin/ProductManager/ProductEdit/ProductAdd';
import BrandView from './pages/Admin/ThuocTinhSanPham/Brand/BrandView';
import SizeView from './pages/Admin/ThuocTinhSanPham/Size/SizeView';


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
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={'<Login />'}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/product-viewer" element={<ProductViewer />}></Route>
          <Route path="/shift-view" element={<ShiftViewer />}></Route>
          <Route path="/color-view" element={<ColorView />}></Route>
          <Route path="/brand-view" element={<BrandView />}></Route>
          <Route path="/size-view" element={<SizeView />}></Route>
          {dynamicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component}></Route>
          ))}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
