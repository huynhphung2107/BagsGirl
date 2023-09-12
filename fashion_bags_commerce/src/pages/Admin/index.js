import styles from '~/pages/Admin/index.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/component/GlobalStyles/layouts/DefaultLayout/SideBar';

const cx = classNames.bind(styles);
function Admin() {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <Sidebar />

      <div className={cx('content')}>content</div>
    </div>
  );
}

export default Admin;
