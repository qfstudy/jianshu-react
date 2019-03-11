import React, {Component} from 'react'
import {connect} from 'react-redux'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import axios from 'axios'

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
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
    axios.get('/api/home.json').then((res)=>{
      const result = res.data.data
      const action={
        type: 'change_home_data',
        topicList:result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action)
    })
  }
}

const mapDispatch=(dispatch)=>({
  changeHomeData(action){
    dispatch(action)
  }
})

export default connect(null,mapDispatch)(Home)