import { StarOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tag, Layout } from "antd";
import { ErrorComponent } from "components/errorComponent/ErrorComponent";
import { MenuComponent } from "components/infrastructure/MenuComponent";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showRequest } from "requests/requests";
import { ISeriesData } from "types/types";
import { undefinedSeriesData } from "utils/utils";

const { Content } = Layout;

export const Show = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState<ISeriesData>(undefinedSeriesData);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      showRequest(id)
        .then((data) => {
          setError("");
          setResult({
            id: data.id,
            summary: data.summary,
            name: data.name,
            premiered: data.premiered,
            ended: data.ended !== null ? data.ended : undefined,
            genres: data.genres,
            status: data.status,
            rating: data.rating.average ? data.rating.average : undefined,
            image: data.image !== null ? data.image.original : undefined,
          });
        })
        .catch(() => {
          setError(
            "Something seems to have gone wrong with the request, are you sure the id is valid?"
          );
        });
    } else {
      setResult(undefinedSeriesData);
      setError(
        "The id seems to be missing. Either put it in the url by add/id or use the search component"
      );
    }
  }, [id]);

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <MenuComponent />
      <Content>
        <div
          className="site-layout-content"
          style={{
            background: "white",
            minHeight: "calc(100vh - 131px)",
            padding: "0 50px",
          }}
        >
          {id && !error ? (
            <Row className="show" gutter={[8, 8]}>
              <Col xl={8} lg={8} md={8} sm={24} className="imageCol">
                <Button
                  onClick={goBack}
                  style={{ position: "absolute", top: "10px", left: "10px" }}
                >
                  <ArrowLeftOutlined /> Back
                </Button>
                <img
                  src={result.image}
                  alt={result.name}
                  style={{ width: "100%" }}
                />
              </Col>
              <Col xl={16} lg={16} md={16} sm={24} className="dataCol">
                <Row gutter={[8, 8]}>
                  <Col
                    span={12}
                    offset={6}
                    style={{ fontSize: "40px", fontWeight: "500" }}
                  >
                    <div style={{ textAlign: "center" }}>{result.name}</div>
                  </Col>
                  <Col
                    xl={6}
                    lg={6}
                    md={6}
                    sm={24}
                    style={{
                      fontSize: "35px",
                      textAlign: "center",
                      padding: "7px 0",
                    }}
                  >
                    <div style={{ textAlign: "center", width: "100%" }}>
                      {result.rating ? (
                        <>
                          {result.rating}{" "}
                          <StarOutlined style={{ color: "#FFFF66" }} />
                        </>
                      ) : undefined}
                    </div>
                  </Col>
                  <Col span={12} offset={6}>
                    <div style={{ textAlign: "center" }}>
                      {result.genres.map((g, i) => (
                        <Tag key={i}>{g}</Tag>
                      ))}
                    </div>
                  </Col>
                  <Col
                    span={24}
                    dangerouslySetInnerHTML={{ __html: result.summary }}
                  />
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      Status: {result.status}
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      Premiered: {result.premiered}
                    </div>
                  </Col>
                  {result.ended ? (
                    <Col span={8}>
                      <div style={{ textAlign: "center" }}>
                        Ended: {result.ended}
                      </div>
                    </Col>
                  ) : undefined}
                </Row>
              </Col>
            </Row>
          ) : (
            <ErrorComponent msg={error} />
          )}
        </div>
      </Content>
    </>
  );
};
