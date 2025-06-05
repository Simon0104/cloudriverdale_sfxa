import React, { useEffect, useState, useMemo } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { documentSources } from "../../common/data/appsDocuments";

const Documents = () => {
  document.title = "Documents | Velzon";

  const [currentPage, setCurrentPage] = useState(1);
  const perPageData = 6;
  const indexOfLast = currentPage * perPageData;
  const indexOfFirst = indexOfLast - perPageData;

  const currentData = useMemo(
    () => documentSources.slice(indexOfFirst, indexOfLast),
    [indexOfFirst, indexOfLast]
  );

  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(currentData);
  }, [currentData]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="container-fluid">
          <Row>
            {(displayList || []).map((item, key) => (
              <Col xxl={3} md={6} key={key}>
                <Card className="card companiesList-card">
                  <CardBody>
                    <div className="avatar-sm mx-auto">
                      <div className="avatar-title bg-light rounded">
                        <img
                          src={item.image_src}
                          alt={item.lable}
                          className="avatar-xxs companyLogo-img"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <h5 className="company-name">{item.lable}</h5>
                      <p className="text-muted industry-type">
                        {item.industry_type}
                      </p>
                      <p className="text-muted small">
                        {item.company_info}
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Documents;
