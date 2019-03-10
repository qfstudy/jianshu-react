import React, {Component} from 'react'
import {ListItem,ListInfo} from '../style'

class List extends Component{
  render(){
    return (
      <ListItem>
        <img src="https://upload-images.jianshu.io/upload_images/10015224-4f930b6ec4481450.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
        <ListInfo></ListInfo>
      </ListItem>
    )
  }
}

export default List