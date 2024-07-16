import ems from "./ems.png"
import water from "./water.png"
import dg from "./dg.png"
import ups from "./ups.png"
import fire from "./fire.png"
import hvac from "./hvac.png"
import nbsafe from "./nbsafe.png"
import temp from "./temp.png"
import trans from "./trans.png"

export const NavData=[
 {
    title: 'ENERGY',
    path:"ems/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={ems} alt="Logo" />
 },
 {
    title: 'WATER',
    path:"water/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={water} alt="Logo" />
 },
 { 
    title: 'DG',
    path:"dg/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={dg} alt="Logo" />
 },
 {
    title: 'UPS',
    path:"ups/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={ups} alt="Logo" />
 },
 {
    title: 'TEMP/HUMIDITY',
    path:"temp/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={temp} alt="Logo" />
 },
 {
    title: 'HVAC',
    path:"hvac/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={hvac} alt="Logo" />
 },
 {
    title: 'FIRE SYSTEM',
    path:"fire/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={fire} alt="Logo" />
 },
 {
    title: 'NBSAFE',
    path:"nbsafe/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={nbsafe} alt="Logo" />
 },
 {
    title: 'TRANSFORMER',
    path:"trans/home",
    icon:<img style={{width:"1.5rem", marginRight:"0.5rem"}} src={trans} alt="Logo" />
 },
]