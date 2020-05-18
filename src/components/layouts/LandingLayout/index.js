import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Layout, Menu, Typography } from 'antd'
import { ReactComponent as LogoIcon } from '@static/logo.svg'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

const LandingLayout = ({ children }) => {
  const [collapsed, toggle] = useState(true)
  return (
    <div className='landing-layout'>
      <Layout>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme='light'
        >
          <div className='h-20 m-2 flex items-center justify-around'>
            <LogoIcon className='h-10 w-10 mr-2 fill-primary-color' />
            <Typography.Title
              level={4}
              className={classNames('text-primary-color', {
                hidden: collapsed,
              })}
            >
              {process.env.APP_NAME}
            </Typography.Title>
          </div>
          <Menu
            theme='light'
            mode='inline'
            defaultSelectedKeys={['1']}
            className='border-0'
          >
            <Menu.Item key='1'>
              <UserOutlined />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key='2'>
              <VideoCameraOutlined />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key='3'>
              <UploadOutlined />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Layout.Content
              onClick={() => toggle(!collapsed)}
              className='leading-normal ml-4 align-bottom text-base'
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Layout.Content>
          </Layout.Header>
          <div
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <div style={{ minHeight: '100vh' }}>{children}</div>
          </div>
        </Layout>
      </Layout>
    </div>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default memo(LandingLayout)
