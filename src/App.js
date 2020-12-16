import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Chart from "./components/Chart/Chart";
import Sidebar from "./components/Sidebar/Sidebar";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Row>
        <Navigation />
      </Row>
      <Row>
        <Col md={8} border>
          <Chart />
        </Col>
        <Col md={4}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default App;
