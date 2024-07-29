import ComboChart from "../../../components/Main/Contents/ComboChart";


export default function DeviceNo2() {
  return (
    <div>
        <h1 className="text-center">This is Device No 2 </h1>
        <div>
        <h2>1. Graph is for motor current</h2>
        <ComboChart />
      </div>
      <div className="d-flex  justify-content-around">
        <div className="col-5">
          <h2>2. Graph for motor temperature</h2>
          <ComboChart />
        </div>
        <div className="col-5">
          <h2>3. Graph for motor vibration</h2> <ComboChart />
        </div>
      </div>
    </div>
  )
}
