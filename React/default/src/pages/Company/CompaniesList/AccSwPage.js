// React/default/src/pages/Company/CompaniesList/AccSwPage.js
import React, { useState, useMemo, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {Card, CardBody, Col, Container, Form, Input, Row, Table} from "reactstrap";
import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import cloudriverdale from "../../../assets/images/companies/cloudriverdale.png";
import { jobCompanies } from "../../../common/data/appsCompanies";
import {jobDocuments} from "../../../common/data/appsDocuments";
import Pagination from "../../../Components/Common/Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const AccSwPage = () => {
  document.title = "Companies | Velzon - React Admin & Dashboard Template";

  const [companiesList, setCompaniesList] = useState();
  const [documentList, setDocumentList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const isConnected = query.get("connected") === "true";


  useEffect(() => {
    setCompaniesList(jobCompanies);
    setDocumentList(jobDocuments)
  }, []);


  const handleXeroAuth = async () => {
    try {
      const res = await axios.get('http://localhost:8000/xero/auth/url', {
        params: { state: '/apps-job-companies-lists' },
        withCredentials: true
      });
      const redirectUrl = res?.url;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        console.error('❌ res.data.url 不存在:', res);
      }
    } catch (err) {
      console.error('❌ Failed to get Xero auth URL:', err.message);
    }
  };
  
  

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="container-fluid">
          <BreadCrumb title="Companies/documents" pageTitle="Acc/SW" />
          <Row>
            <Col xxl={9}>
            <h5 className="mb-3 mt-5">Seamless integreated to your accounting tool</h5>

              <Row className="job-list-row" id="companies-list">
                {(companiesList || []).map((item, key) => (
                  <Col xxl={3} md={6} key={key}>
                    {/* <Link onClick = {handleXeroAuth}> */}
                    <div onClick = {item.label == 'Xero' ? handleXeroAuth : undefined} 
                    className="text-reset text-decoration-none cursor-pointer">
                      <Card className="card AccSwPage-card h-100">
                        <CardBody>
                          <div className="avatar-sm mx-auto">
                            <div className="avatar-title bg-light rounded">
                              <img
                                src={item.image_src}
                                alt=""
                                className="avatar-xxs companyLogo-img"
                              />
                            </div>
                          </div>
                          <div className="text-center">
                            {/* <Link to="#"> */}
                              <h5 className="mt-3 company-name">{item.lable}</h5>
                            {/* </Link> */}
                            <div className="d-none company-desc">
                              {item.company_info}
                            </div>
                            <p className="text-muted industry-type">
                              {item.industry_type}
                            </p>
                            <span className="stretched-link"></span>

                          </div>
                        </CardBody>
                      </Card>
                      </div>
                  {/* </Link> */}
                  </Col>
                ))}
              </Row>



              <h5 className="mb-3 mt-5">Import documents from shared folders</h5>
              <Row className="job-list-row" id="documents-list">
                {(documentList || []).map((item, key) => (
                  <Col xxl={3} md={6}  key={key}>
                    <Card className="card companiesList-card">
                      <CardBody>
                        <div className="avatar-sm mx-auto mb-2">
                          <div className="avatar-title bg-light rounded">
                            <img
                              src={item.image_src}
                              alt=""
                              className="avatar-xs companyLogo-img"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <h5 className="mt-3">{item.lable}</h5>
                          <p className="text-muted small mb-0">{item.industry_type}</p>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>




            </Col>
            <Col xxl={3}>
              <Card id="company-overview">
                <CardBody>
                  <div className="avatar-lg mx-auto mb-3">
                    <div className="avatar-title bg-light rounded">
                      <img
                        src={cloudriverdale}
                        alt=""
                        className="avatar-sm company-logo"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <NavLink to="#!">
                      <h5 className="overview-companyname">
                        Could Riverdale
                      </h5>
                    </NavLink>
                    <p className="text-muted overview-industryType">
                      IT Department
                    </p>

                    <ul className="list-inline mb-0">
                      <li className="list-inline-item avatar-xs">
                        <NavLink
                          to=""
                          className="avatar-title bg-dark-subtle text-body fs-15 rounded"
                        >
                          <i className="ri-global-line"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item avatar-xs">
                        <NavLink
                          to=""
                          className="avatar-title bg-danger-subtle text-danger fs-15 rounded"
                        >
                          <i className="ri-mail-line"></i>
                        </NavLink>
                      </li>
                      <li className="list-inline-item avatar-xs">
                        <NavLink
                          to=""
                          className="avatar-title bg-warning-subtle text-warning fs-15 rounded"
                        >
                          <i className="ri-question-answer-line"></i>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </CardBody>

                <CardBody>
                  <h6 className="text-muted text-uppercase fw-semibold mb-3">
                    Information
                  </h6>
                  <p className="text-muted mb-4">
                    This module allows you to securely connect your accounting platform with various document services such as Google Drive, Dropbox, OneDrive, and more.
                    You can import spreadsheets, invoices, receipts, or contracts to enhance financial automation and reporting.
                  </p>
                  <ul className="text-muted">
                    <li>📁 Connect shared folders from cloud services</li>
                    <li>🔒 Ensure secure access with OAuth authorization</li>
                    <li>📄 Auto-detect file types (PDF, DOCX, XLSX)</li>
                    <li>🧾 Link documents to specific companies or transactions</li>
                    <li>📊 Use uploaded documents in analytics & forecasting</li>
                  </ul>

                  <div className="table-responsive table-card">
                    <Table className="table table-borderless mb-4">
                    <NavLink to="/connect/acc-sw" className="btn btn-primary w-100">
                        Start Connecting Documents
                        <i className="ri-arrow-right-line align-bottom ms-1"></i>
                      </NavLink>
                    </Table>
                  </div>

                  <div className="hstack gap-3">
                    <button
                      type="button"
                      className="btn btn-soft-primary custom-toggle w-100"
                      data-bs-toggle="button"
                    >
                      <span className="icon-on">
                        <i className="ri-add-line align-bottom me-1"></i> Follow
                      </span>
                      <span className="icon-off">
                        <i className="ri-user-unfollow-line align-bottom me-1"></i>{" "}
                        Unfollow
                      </span>
                    </button>
                    <NavLink to="#" className="btn btn-info w-100">
                      More View{" "}
                      <i className="ri-arrow-right-line align-bottom"></i>
                    </NavLink>
                  </div>
                </CardBody>
              </Card>

              <Card className="overflow-hidden shadow-none">
                <CardBody className="bg-danger-subtle">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-danger-subtle text-danger rounded-circle fs-17">
                          <i className="ri-gift-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="fs-16 fw-bold">Free trial</h6>
                      <p className="text-muted mb-0">28 days left</p>
                    </div>
                    <div>
                      <NavLink to="/pages-pricing" className="btn btn-danger">
                        Upgrade
                      </NavLink>
                    </div>
                  </div>
                </CardBody>
                <CardBody className="bg-danger-subtle border-top border-danger border-opacity-25 border-top-dashed">
                  <NavLink
                    to="#"
                    className="d-flex justify-content-between align-items-center text-body"
                  >
                    <span>See benefits</span>
                    <i className="ri-arrow-right-s-line fs-18"></i>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};



export default AccSwPage;
