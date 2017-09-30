import React from "react";
import { Col, Panel, Row, Image, ProgressBar, Label } from "react-bootstrap";
import { number, string, bool } from "prop-types";

const UserPanel = ({ percentage, color, star }) => (
  <Panel>
    <Row className="userPanel__mainRow">
      <Col md={4} className="userPanel__colImg">
        <Image
          src="..\..\public\svg\user.svg"
          className="userPanel__userImg"
          circle
        />
      </Col>
      <Col md={8} className="userPanel__userTitle">
        <span className="userPanel__userName">
          Mariana La Chupa
        </span>

        {star &&
          <span className="userPanel__starImg">
            <Image src="..\..\public\svg\star.svg" />
          </span>}
        <span className="userPanel__jobName"> Desarrolladora</span>
      </Col>
    </Row>
    <Row>
      <Col
        md={8}
        className={`taskCard__progressBarCol--${(percentage === 0 && "0") || (percentage === 25 && "25") || (percentage === 50 && "50") || (percentage === 75 && "75") || (percentage === 100 && "100")}`}
      >
        <ProgressBar
          now={100}
          className={`taskCard__progressBar ${color !== "" ? `taskCard__progressBar--${color}` : ""}`}
          bsClass="userProgress"
        />
      </Col>
      <Col md={4} className="taskCard__progressBarColLabel">
        <Label className="taskCard__progressBarLabel">{`${percentage}%`}</Label>
      </Col>
    </Row>
  </Panel>
);

UserPanel.propTypes = {
  percentage: number,
  color: string,
  star: bool
};

UserPanel.defaultProps = {
  percentage: 0,
  color: "",
  star: false
};

export default UserPanel;
