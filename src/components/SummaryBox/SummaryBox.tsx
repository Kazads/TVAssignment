import { IGeneralSeriesData } from "types/types";
import "./summaryBox.css";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { getShowLink } from "utils/utils";

export const SummaryBox = ({
  id,
  name,
  premiered,
  ended,
  genres,
  status,
  rating,
  image,
}: IGeneralSeriesData) => {
  return (
    <div className="summaryBox" data-testid={"summaryBox"}>
      <Row>
        <Col xs={8} sm={8} md={6} lg={4} xl={2} data-testid={"image"}>
          {image ? <img src={image} alt="" /> : undefined}
        </Col>
        <Col xs={16} sm={16} md={18} lg={20} xl={22} className="data">
          <Row data-testid={"header"}>
            <Link to={getShowLink(id)}>{name}</Link>
          </Row>
          {premiered ? (
            <Row data-testid={"releaseDate"}>Premiered: {premiered}</Row>
          ) : undefined}
          {ended ? (
            <Row data-testid={"endDate"}>End date: {ended}</Row>
          ) : undefined}
          {genres.length > 0 ? (
            <Row data-testid={"genres"}>Genres: {genres.join(", ")}</Row>
          ) : undefined}
          <Row data-testid={"status"}>Status: {status}</Row>
          {rating ? (
            <Row data-testid={"ratings"}>Ratings: {rating}</Row>
          ) : undefined}
        </Col>
      </Row>
    </div>
  );
};
