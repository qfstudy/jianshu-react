import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Detailwrapper,Header,Content} from './style'
import {actionCreators} from './store'

class Detail extends Component{
  render(){
    return (
      <Detailwrapper>
        <Header>{this.props.title}</Header>
        <Content 
          dangerouslySetInnerHTML={{__html:this.props.content}} 
        />
      </Detailwrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail()
  }
}
const mapState=(state)=>({
  title: state.getIn(['detail','title']),
  content: state.getIn(['detail','content'])
})

const mapDispatch=(dispatch)=>({
  getDetail(){
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState,mapDispatch)(Detail)