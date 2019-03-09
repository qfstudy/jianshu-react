import React, {Component} from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recomment from './components/Recomment'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component{
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="panner-img" alt="" src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recomment></Recomment>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home