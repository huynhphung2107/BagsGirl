import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Admin from './pages/Admin';
import ProductViewer from './pages/Admin/ProductManager/ProductViewer';
import ShiftViewer from './pages/Admin/Shift/ShiftViewer';
import Login from './pages/Login/indexLoginView';
import Home from './pages/Home';
import ColorView from './pages/Admin/ThuocTinhSanPham/Color/ColorView';
import ProductAdd from './pages/Admin/ProductManager/ProductEdit/ProductAdd';
import BrandView from './pages/Admin/ThuocTinhSanPham/Brand/BrandView';
import SizeView from './pages/Admin/ThuocTinhSanPham/Size/SizeView';
import TypeView from './pages/Admin/ThuocTinhSanPham/Type/TypeView';
import BuckleTypeView from './pages/Admin/ThuocTinhSanPham/BuckleType/BuckleTypeView/indexBuckleTypeView';
import CompartmentView from './pages/Admin/ThuocTinhSanPham/Compartment/CompartmentView/indexCompartmentView';
import MaterialView from './pages/Admin/ThuocTinhSanPham/Material/MaterialView';
import ProducerView from './pages/Admin/ThuocTinhSanPham/Producer/ProducerView/indexProducerView';
import VoucherView from './pages/Admin/Voucher/VoucherView';
import StaffView from './pages/Admin/Staff/StaffView';
import SalesCounter from './pages/Admin/SalesManager/SalesCounter';
import CustomerView from './pages/Admin/Customer/CustomerView';
import HoaDonView from './pages/Admin/QuanLyHoaDon/HienThiHoaDon/indexHoaDonView';

const dynamicRoutes = [
  { path: '/admin', component: <Admin />, title: 'Trang chủ' },
  { path: '/product-viewer', component: <ProductViewer />, title: 'Về chúng tôi' },
  { path: '/login', component: <Login />, title: 'Liên hệ' },
  { path: '/', component: <Home />, title: 'Home' },
  { path: '/product-add', component: <ProductAdd />, title: 'A' },
  { path: '/shift-view', component: <ShiftViewer />, title: 'B' },
  { path: '/color-view', component: <ColorView />, title: 'C' },
  { path: '/brand-view', component: <BrandView />, title: 'D' },
  { path: '/size-view', component: <SizeView />, title: 'E' },
  { path: '/type-view', component: <TypeView />, title: 'F' },
  { path: '/buckle-type-view', component: <BuckleTypeView />, title: 'G' },
  { path: '/material-view', component: <MaterialView />, title: 'H' },
  { path: '/compartment-view', component: <CompartmentView />, title: 'I' },
  { path: '/producer-view', component: <ProducerView />, title: 'K' },
  { path: '/voucher-view', component: <VoucherView />, title: 'L' },
  { path: '/staff-view', component: <StaffView />, title: 'M' },
  { path: '/customer-view', component: <CustomerView />, title: 'j' },
  { path: '/product-add', component: <ProductAdd />, title: 'aa' },
  { path: '/sales-counter', component: <SalesCounter />, title: 'agad' },
  { path: '/bill-view', component: <HoaDonView />, title: 'hoaDon' },
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
