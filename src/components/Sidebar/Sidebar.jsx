import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './sidebar.scss'
import { AccountCircleOutlined, HealingOutlined, Logout, NotificationsNoneOutlined, QueryStats, Settings, SettingsAccessibility, SettingsApplications } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">sfadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Person2OutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className='icon'/>
            <span>Products</span>
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
            <NotificationsNoneOutlined  className='icon'/>
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
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar