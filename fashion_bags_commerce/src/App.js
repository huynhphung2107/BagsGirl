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
import CustomerView from './pages/Admin/Customer/CustomerView';

const dynamicRoutes = [
  { path: '/admin', component: <Admin />, title: 'Trang chủ' },
  { path: '/product-viewer', component: <ProductViewer />, title: 'Về chúng tôi' },
  { path: '/login', component: <Login />, title: 'Login' },
  { path: '/', component: <Home />, title: 'Home' },
  { path: '/product-add', component: <ProductAdd />, title: 'Thêm sản phẩm' },
  { path: '/shift-view', component: <ShiftViewer />, title: 'Giao ca' },
  { path: '/color-view', component: <ColorView />, title: 'Màu sắc' },
  { path: '/brand-view', component: <BrandView />, title: 'Thương hiệu' },
  { path: '/size-view', component: <SizeView />, title: 'Kích cỡ' },
  { path: '/type-view', component: <TypeView />, title: 'Kiểu balo' },
  { path: '/buckle-type-view', component: <BuckleTypeView />, title: 'Kiểu khóa' },
  { path: '/material-view', component: <MaterialView />, title: 'Chất liệu' },
  { path: '/compartment-view', component: <CompartmentView />, title: 'Kiểu ngăn' },
  { path: '/producer-view', component: <ProducerView />, title: 'Nhà sản xuất' },
  { path: '/voucher', component: <VoucherView />, title: 'Khuyến mãi' },
  { path: '/staff-view', component: <StaffView />, title: 'Nhân viên' },
  { path: '/customer-view', component: <CustomerView />, title: 'Khách hàng' },
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
