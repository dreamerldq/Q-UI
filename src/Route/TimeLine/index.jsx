import HuaTimeLine from '../../Component/HuaTimeline'
import React from 'react'
class TimeLine extends React.Component{
  render(){
    return <React.Fragment>
      <HuaTimeLine>
                <HuaTimeLine.Item key="1" color="green">
                  <p>Create a services site 2015-09-01</p>
                  <p>Create a services site 2015-09-01</p>
                  <p>Create a services site 2015-09-01</p>
                  <p>Create a services site 2015-09-01</p>
                  </HuaTimeLine.Item>
                <HuaTimeLine.Item key="2">Solve initial network problems 2015-09-01</HuaTimeLine.Item>
                <HuaTimeLine.Item key="3">Technical testing 2015-09-01</HuaTimeLine.Item>
                <HuaTimeLine.Item key="4">Network problems being solved 2015-09-01</HuaTimeLine.Item>
             </HuaTimeLine>
    </React.Fragment>
  }
}
export default TimeLine