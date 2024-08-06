import ems from "./ems.png"
import water from "./water.png"
import dg from "./dg.png"
import ups from "./ups.png"
import fire from "./fire.png"
import hvac from "./hvac.png"
import nbsafe from "./nbsafe.png"
import temp from "./temp.png"
import trans from "./trans.png"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const NavData=[
   {
      title: 'Admin',
      path:"/admin",
      icon:<AccountCircleIcon/>
   },
   {
      title: 'User',
      path:"/user",
      icon:<AccountCircleIcon/>
   },
 {
    title: 'ENERGY',
    path:"/ems",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={ems} alt="Logo" />
 },
 {
    title: 'WATER',
    path:"/water",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={water} alt="Logo" />
 },
 { 
    title: 'DG',
    path:"/dg",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={dg} alt="Logo" />
 },
 {
    title: 'UPS',
    path:"/ups",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={ups} alt="Logo" />
 },
 {
    title: 'TEMP/HUMIDITY',
    path:"/temp",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={temp} alt="Logo" />
 },
 {
    title: 'HVAC',
    path:"/hvac",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={hvac} alt="Logo" />
 },
 {
    title: 'FIRE SYSTEM',
    path:"/fire",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={fire} alt="Logo" />
 },
 {
    title: 'NBSAFE',
    path:"/nbsafe",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={nbsafe} alt="Logo" />
 },
 {
    title: 'TRANSFORMER',
    path:"/trans",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={trans} alt="Logo" />
 },
]