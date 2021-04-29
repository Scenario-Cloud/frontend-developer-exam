import Logo from '../images/logo.png'
import { Menu , Icon  , Image , Dropdown} from 'semantic-ui-react'


const state = {
    pageTitle:'Document Tracking System'
}

const currentUser = { userName: 'John Doe' }
 
const trigger = (
    <div className='userContainer'>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      <div className='userInfo'>      
        <p className='userName'>{currentUser.userName}</p>
        <span>Administrator</span>
      </div>
        <span className='iconDrop'><Icon name='caret down'/></span>
    </div>
)
  
const options = [
    { key: 'home', text: 'Home Menu', icon: 'home' },
    { key: 'fav', text: 'Favourites', icon: 'star' },
    { key: 'settings', text: 'My Settings', icon: 'setting' },
    { key: 'system', text: 'System Info', icon: 'info circle' },
    { key: 'sign-out', text: 'Logout', icon: 'sign out' },
]

const NavHeader = ({click , close}) => {
    return (
        <Menu className='navHeader' style={{zIndex:10111}} pointing stackable borderless size='massive'>
            <Menu.Item className='navMenu'>
                <Icon name='sidebar' />
            </Menu.Item>
            <Menu.Item>
                <Image className='brandLogo' src={Logo} />
            </Menu.Item>
            <div className='verticalDiviver'></div>
            <Menu.Item header >{state.pageTitle}</Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item name='userMenu'>
                    <Dropdown onClose={() => close()} onOpen={() => click()} trigger={trigger} options={options} pointing='top right' icon={null} />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
    
  }

  export default NavHeader;