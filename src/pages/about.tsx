import { HeadFC } from 'gatsby'
import * as React from 'react'
import { Layout, Button, Row, Col } from 'antd'
import image from '../images/image.png'

import Header from '../components/header.jsx'

const { Footer, Content } = Layout;

const AboutPage = () => {
  return (
    <div className=' bg-white'>
      <Header />
      <Content className='mx-20'>
        <Row>
          <Col span={12}>
            <div className='mt-24'>
              <p className='text-xs text-gray-400 mb-4'>- FREE 30 DAYS TRIAL</p>
              <h1 className='text-8xl mb-6'>The best way to showcase your project.</h1>
              <p className='text-sm mb-10'>Here you can put a short description about your project</p>
            </div>
              <div>
                <Button type='primary'>Try for free</Button>
                <Button>See how it works</Button>
              </div>
          </Col>
          <Col span={12}>
            <img alt='store' src={image} />
          </Col>
        </Row>
        <div className='w-1/5 text-center mt-10'>
          <p>Trusted by individuals and teams at the world's best companies</p>
          <p>Logo</p>
        </div>
      </Content>
      {/* <Footer>Footer</Footer>
          <h1>About Me</h1>
          <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p> */}
    </div>
  )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage
