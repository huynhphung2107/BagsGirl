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
import CartView from './pages/Home/Cart';
import Shop from './pages/Home/Shop/shop';
import ShopDetail from './pages/Home/ShopDetail/shopDetail';

const dynamicRoutes = [
  { path: '/admin', component: <Admin />, title: 'Trang chủ' },
  { path: '/product-viewer', component: <ProductViewer />, title: 'Trang sản Phẩm' },
  { path: '/login', component: <Login />, title: 'Trang đăng nhập' },
  { path: '/', component: <Home />, title: 'Home' },


  { path: '/product-add', component: <ProductAdd />, title: 'Trang thêm sản phẩm' },
  { path: '/shift-view', component: <ShiftViewer />, title: 'Trang giao ca' },
  { path: '/color-view', component: <ColorView />, title: 'Trang màu sắc' },
  { path: '/brand-view', component: <BrandView />, title: 'Trang thương hiệu' },
  { path: '/size-view', component: <SizeView />, title: 'Trang kích cỡ' },
  { path: '/type-view', component: <TypeView />, title: 'Trang kiểu sản phẩm' },
  { path: '/buckle-type-view', component: <BuckleTypeView />, title: 'Trang kiểu khóa' },
  { path: '/material-view', component: <MaterialView />, title: 'Trang chất liệu' },
  { path: '/compartment-view', component: <CompartmentView />, title: 'Trang kiểu ngăn' },
  { path: '/producer-view', component: <ProducerView />, title: 'Trang nhà sản xuất' },
  { path: '/voucher-view', component: <VoucherView />, title: 'Trang khuyến mại' },
  { path: '/staff-view', component: <StaffView />, title: 'Trang nhân viên' },
  { path: '/customer-view', component: <CustomerView />, title: 'Trang khách hàng' },
  { path: '/sales-counter', component: <SalesCounter />, title: 'Trang bán hàng' },
  { path: '/cart', component: <CartView />, title: 'Trang giỏ hàng' },
  { path: '/bill-view', component: <HoaDonView />, title: 'Trang hóa đơn' },
  { path: '/shop', component: <Shop />, title: 'Trang cửa hàng' },
  { path:  `/shop/detail/:productId` , component: <ShopDetail />, title: 'Trang chi tiết sản phẩm' },
  { path: '/login', component: <Login />, title: 'Trang đăng nhập' },
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
