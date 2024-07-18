import { Col, Container, Row, Table } from "react-bootstrap";
import TopBox from "../../../components/Main/Contents/TopBox";
import LineChartBox from "../../../components/Main/Contents/LineChartBox";
import ComboChart from "../../../components/Main/Contents/ComboChart";
import { LineChart } from "../../../components/Main/Contents/LineChart";

export default function EmsHome() {
  return (
    <div className=" w-100">
      <Container className="d-flex mt-3 gap-2">
        <TopBox title="Last Seen" value="Time" />
        <TopBox title="Running Hours" value="Time" />
        <TopBox title="Off Time" value="Time" />
      </Container>
      <Container>
        <Row className="gap-3 mt-5">
          <Col className="border rounded p-3 hover">
            <h6>
              Instantaneous Power{" "}
              <img src="energy.png" alt="Power" style={{ width: "1.5rem" }} />
            </h6>
            <Table className="mt-4 ">
              <tr>
                <th>Active</th>
                <td>1.67kW</td>
              </tr>
              <tr>
                <th>Apparent</th>
                <td>8.68 kVA</td>
              </tr>
              <tr>
                <th>Power Factor</th>
                <td>0.21</td>
              </tr>
            </Table>
          </Col>
          <Col className=" border rounded pt-3 hover">
            <h6>
              Energy Usage - Active/Apparent
              <img src="usage.png" alt="" style={{ width: "1.5rem" }} />
            </h6>
            <Table className="mt-4">
              <tr>
                <th>Day</th>
                <td>53.77 kWh</td>
                <td>53.77 kWh</td>
              </tr>
              <tr>
                <th>Month</th>
                <td>53.77 kWh</td>
                <td>53.77 kWh</td>
              </tr>
              <tr>
                <th>Total</th>
                <td>53.77 kWh</td>
                <td>53.77 kWh</td>
              </tr>
            </Table>
          </Col>
          <Col className="border rounded pt-3 hover">
            <h6>
              Maximum Demand
              <img src="demand.png" alt="" style={{ width: "1.5rem" }} />
            </h6>
            <Table className="mt-4">
              <tr>
                <th>Day</th>
                <td>53.77 kWh</td>
                <td>53.77 kWh</td>
              </tr>
              <tr>
                <th>Month</th>
                <td>53.77 kWh</td>
                <td>53.77 kWh</td>
              </tr>
            </Table>
          </Col>
          <Col className="border rounded pt-3 hover">
            <h6>
              {" "}
              Voltage & Current
              <img src="volt.png" alt="" style={{ width: "1.5rem" }} />
            </h6>
            <Table className="mt-4">
              <tr>
                <th>Volt</th>
                <td>R-Y 412</td>
                <td>Y-B 408</td>
                <td>B-R 408</td>
              </tr>
              <tr>
                <th>Amp</th>
                <td>R-Y 412</td>
                <td>Y-B 408</td>
                <td>B-R 408</td>
              </tr>
            </Table>
          </Col>
        </Row>
      </Container>
      <Container>
        <Col className="col-12 border rounded mt-3" style={{ height: "200px" }}>
          Chart 1
          <LineChartBox />
        </Col>
        <Row>
          <Col>
            Chart 2
            <ComboChart />
          </Col>
          <Col>
            Chart 3
            <LineChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
