import * as React from 'react'
import { Button, Layout, Menu } from 'antd'
import logo from '../images/logo.png'

const { Header: Head } = Layout;

const Header = () => {
  const menus = ['Home', 'Pricing', 'About us', 'Contact']
  return (
    <Head className='flex items-center bg-white mb-16'>
      <img src={logo} alt="Logo" width={70} height={70} />
      <Menu
        style={{ marginLeft: '50px' }}
        mode="horizontal"
        defaultSelectedKeys={[menus[0]]}
        items={menus.map(menu => ({ key: menu, label: menu }))}
      />
      <div className='flex items-center justify-end gap-30 w-full'>
        <p>Login</p>
        <Button>Sign up</Button>
      </div>
    </Head>
  )
}

export default Header;
