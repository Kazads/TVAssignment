import { Col } from "antd";
import { IErrorComponent } from "types/types";

export const ErrorComponent = ({ msg }: IErrorComponent) => {
  return (
    <Col span={24}>
      <div style={{ textAlign: "center", fontSize: "20px", color: "red" }}>
        {msg}
      </div>
    </Col>
  );
};
