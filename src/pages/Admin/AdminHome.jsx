import UsersData from "../../data/UsersData/UsersData";
import TopBox from "../../components/Main/Contents/TopBox";


export default function AdminHome() {
let {data}= UsersData();

  return (
    <div className="w-100 p-3 gap-3 d-flex">
      <TopBox title="Total Users" value={data.length} />
      <TopBox title="Total Devices" value='N/A' /> 
    </div>
  )
}
