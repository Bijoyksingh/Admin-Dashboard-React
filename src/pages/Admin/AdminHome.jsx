import { UsersData } from "../../api/api";
import { DevicesData } from "../../api/api";
import TopBox from "../../components/Main/Contents/TopBox";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
let {data}= UsersData();
const {device}= DevicesData();
const navigate = useNavigate();
const onClickUsers=()=>{
  navigate("/admin/users")
}
const onClickDevice=()=>{
  navigate("/admin/devices")
}

  return (
    <div className="w-100 p-3 gap-3 d-flex justify-content-center">
      <TopBox title="Total Users" value={data.length} onClick={onClickUsers} />
      <TopBox title="Total Devices" value={device.length} onClick={onClickDevice}/> 
    </div>
  )
}
