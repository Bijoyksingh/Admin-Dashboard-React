// import React from 'react'
import SideBar from '../../../components/SideBar/SideBar'
import MainContent from '../../../components/Main/MainContent'


export default function EmsHome() {
  return (
 <div className="d-flex">
  <div className="col-1">
    <SideBar/>
 </div>
   <div className="col-11">
    <MainContent/>
   </div>
  </div> 
    
  )
}
