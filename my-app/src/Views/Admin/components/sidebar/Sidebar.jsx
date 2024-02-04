import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Sidebar = () => {

  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    // Ví dụ: Xóa token JWT từ localStorage và chuyển hướng người dùng đến trang đăng nhập
    localStorage.removeItem('jwt');
    window.location.href = '/admin/login'; // Chuyển hướng đến trang đăng nhập
    alert('Đăng xuất thành công')
  };

  return (
    <>

    <div className="sidebar">
      <div className="top">
        <span className="logo">FastFood Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
            <li>
              <Link to={'/admin'}>
            <DashboardIcon className="icon"/>
                <span>Dashboard</span>
                </Link>
          </li>
          <p className="title">List</p>
          <li>
            <Link to={'/admin/accounts'}>
              <PersonOutlineIcon className="icon"/>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/producttypes'}>
              <AddBusinessIcon className="icon"/>
              <span>ProductTypes</span>
              </Link>
          </li>
          <li>
            <Link to={'/admin/products'}>
              <AddBusinessIcon className="icon"/>
              <span>Products</span>
              </Link>
          </li>
          <li>
            <Link to={'/admin/invoices'}>
              <AddCardIcon className="icon"/>
              <span>Invoices</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/combos'}>
              <LocalShippingIcon className="icon"/>
              <span>Combos</span>
              </Link>
          </li>
          <li>
            <Link to={'/admin/ratings'}>
              <QueryStatsIcon className="icon"/>
              <span>Ratings</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/slideshows'}>
            <AddAlertIcon className="icon"/>
              <span>Slideshow</span>
              </Link>
          </li>
            <li>
              <Link  to={'/admin/promotions'}>
              <SettingsSystemDaydreamIcon className="icon"/>
                <span>Promotion</span>
                </Link>
          </li>
            <li>
              <Link  to={'/admin/comments'}>
            <PsychologyIcon className="icon"/>
                <span>Comment</span>
                </Link>
          </li>
          <p className="title">USER</p>
            <li>
              <Link to={'/admin/profile'}>
                <AccountCircleIcon className="icon"/>
                  <span>Prolife</span>
              </Link>
            </li>
             <li>
              <Link to={'/admin/login'}>
                <AccountCircleIcon className="icon"/>
                  <span>Login</span>
              </Link>
            </li>
          <li>
                <button onClick={handleLogout} className="nut" >
                <ExitToAppIcon className="icon" />
                  Đăng Xuất
                </button>
          </li>
        </ul>
      </div>

      </div>
      
      </>
  )
}

export default Sidebar