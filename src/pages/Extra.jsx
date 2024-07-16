import SideBar from "../components/SideBar/SideBar";
import MainContent from "../components/Main/MainContent";


export default function Extra() {
  return (
   

<div className="d-flex" >
      <div style={{width:"10%"}}><SideBar/></div>
      <div className="" style={{width:"90%"}}>
      
        <MainContent/>
        </div>
      
      
    </div>
    
  )
}
