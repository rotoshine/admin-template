import * as React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'

const { Sider } = Layout
const { SubMenu } = Menu

interface Props {
  history: History
}

interface MenuData {
  key: string,
  icon: string,
  url: string,
  title: string,
}

const menus: MenuData[] = [
  {
    key: 'dashboard',
    icon: 'dashboard',
    url: '/',
    title: 'Dashboard',
  },
]

class SideBar extends React.Component<Props & RouteComponentProps<any>, any> {
  public handleMenuClick = (e: any) => {
    const { history } = this.props
    const menu = menus.find((menuData: MenuData) => menuData.key === e.key)

    if (menu) {
      history.push(menu.url)
    }
  }

  public render() {
    return (
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={['dashboard']}
          onClick={this.handleMenuClick}
        >
          <SubMenu key="sub1" title={<span><Icon type="trophy" />앱이름</span>}>
            {menus.map((menu) => (
              <Menu.Item key={menu.key}><Icon type={menu.icon} /> {menu.title}</Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(SideBar)
