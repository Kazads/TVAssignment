import { Col, Input, Row, Layout } from "antd";
import { SummaryBox } from "components/SummaryBox/SummaryBox";
import { ErrorComponent } from "components/errorComponent/ErrorComponent";
import { MenuComponent } from "components/infrastructure/MenuComponent";
import { Loader } from "components/loader/Loader";
import { useEffect, useState } from "react";
import { searchRequest } from "requests/requests";
import { IGeneralSeriesData } from "types/types";

const { Content } = Layout;

export const Search = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<IGeneralSeriesData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (search !== "") {
      setLoading(true);
      searchRequest(search)
        .then((data) => {
          if (data.length > 0) {
            setError("");
            setSearchResults(
              data.map((d: any): IGeneralSeriesData => {
                console.log(d.show.ended);
                return {
                  id: d.show.id,
                  name: d.show.name,
                  premiered: d.show.premiered,
                  ended: d.show.ended !== null ? d.show.ended : undefined,
                  genres: d.show.genres,
                  status: d.show.status,
                  rating: d.show.rating.average
                    ? d.show.rating.average
                    : undefined,
                  image:
                    d.show.image !== null ? d.show.image.medium : undefined,
                };
              })
            );
          } else {
            setError("Your search gave no result");
          }
        })
        .catch(() => {
          setError("Something went wrong with the request");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSearchResults([]);
    }
  }, [search]);

  const onChange = (event: any) => {
    setSearch(event.target.value);
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
          <Row gutter={[8, 8]}>
            <Col span={12} offset={6}>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Search:
              </div>
            </Col>
            <Col span={12} offset={6}>
              <Input size="large" onChange={onChange} />
            </Col>
            {loading ? (
              <Col span={4} offset={10}>
                <Loader />
              </Col>
            ) : searchResults.length > 0 && !error ? (
              <Col span={24}>
                {searchResults.map((sr) => (
                  <SummaryBox
                    key={sr.id}
                    id={sr.id}
                    name={sr.name}
                    premiered={sr.premiered}
                    genres={sr.genres}
                    status={sr.status}
                    rating={sr.rating}
                    image={sr.image}
                    ended={sr.ended}
                  />
                ))}
              </Col>
            ) : (
              <ErrorComponent msg={error} />
            )}
          </Row>
        </div>
      </Content>
    </>
  );
};
