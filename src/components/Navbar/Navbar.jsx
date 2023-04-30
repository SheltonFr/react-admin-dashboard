import { ChatBubbleOutline, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, ListOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import './navbar.scss'



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlined />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className='icon' />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutline className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListOutlined className='icon' />
                    </div>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="user avatar"
                            className='avatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar