import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { AccountCircleOutlined, HealingOutlined, Logout, NotificationsNoneOutlined, QueryStats, Settings, SettingsAccessibility, SettingsApplications } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {


  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="sidebar">
      <div className="top">
        <NavLink to={'/'}>
          <span className="logo">sfadmin</span>
        </NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <NavLink to={'/users'}>
              <Person2OutlinedIcon className='icon' />
              <span>Users</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>
              <ProductionQuantityLimitsIcon className='icon' />
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <CreditCardIcon className='icon' />
            <span>Orders</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStats className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlined className='icon' />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealingOutlined className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <SettingsApplications className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <Settings className='icon' />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlined className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <Logout className='icon' />
            <span>Logut</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
        <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar