import {fromJS} from 'immutable'

const defaultState=fromJS({
  topicList: [{
    id: 1,
    title: '社会热点',
    imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  },
  {
    id: 2,
    title: '社会热点2',
    imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
  }],
  articleList:[{
    id: 1,
    title: '写作，也许是为了对抗孤独（上）',
    desc: '在简书平台上，发现一个有趣的现象，简友们每隔一段时间，都会写文提醒自己，不要在乎赞与钻，那些都是浮云，如果跟风跑，就是浪费时间。 可是每隔一段时.',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/10015224-4f930b6ec4481450.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 2,
    title: '写作，也许是为了对抗孤独（2）',
    desc: '在简书平台上，发现一个有趣的现象，简友们每隔一段时间，都会写文提醒自己，不要在乎赞与钻，那些都是浮云，如果跟风跑，就是浪费时间。 可是每隔一段时.',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/10015224-4f930b6ec4481450.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '写作，也许是为了对抗孤独（3）',
    desc: '在简书平台上，发现一个有趣的现象，简友们每隔一段时间，都会写文提醒自己，不要在乎赞与钻，那些都是浮云，如果跟风跑，就是浪费时间。 可是每隔一段时.',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/10015224-4f930b6ec4481450.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
})

export default (state=defaultState,action)=>{
  switch(action.type){
    default:
      return state
  }
}