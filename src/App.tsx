import * as React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout, Row, Col } from 'antd'

import SideBar from './SideBar'
import DashboardPage from './pages/dashboard/DashboardPage'

import './App.less'

const { Content } = Layout

class App extends React.Component {
  public render() {
    return (
      <Layout className="App">
        <SideBar />
        <Content className="App__content">
          <Row>
            <Col span={24}>
              <Switch>
                <Route exact path="/" component={DashboardPage} />
              </Switch>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default App
