import React, { useState, useMemo, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Row,
  Table,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import img6 from "../../../assets/images/companies/cloudriverdale.png";
import { jobCompanies } from "../../../common/data/appsCompanies";
import Pagination from "../../../Components/Common/Pagination";
const CompaniesList = () => {
  document.title = "Companies | Velzon - React Admin & Dashboard Template";

  const [companiesList, setCompaniesList] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  //pagination
  const perPageData = 16;
  const indexOfLast = currentPage * perPageData;
  const indexOfFirst = indexOfLast - perPageData;
  const currentdata = useMemo(() => jobCompanies?.slice(indexOfFirst, indexOfLast), [indexOfFirst, indexOfLast])

  useEffect(() => {
    setCompaniesList(currentdata)
  }, [currentdata]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid className="container-fluid">
          <BreadCrumb title="Companies" pageTitle="Job" />
          <Row>
            <Col xxl={9}>
              <Card>
                <CardBody>
                  <Form>
                    <Row className="g-3">
                      <Col xxl={5} sm={6}>
                        <div className="search-box">
                          <Input
                            type="text"
                            className="form-control search bg-light border-light"
                            id="searchCompany"
                            placeholder="Search for company, industry type..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </Col>

                      <Col xxl={3} sm={6}>
                        <Flatpickr
                          className="form-control"
                          id="datepicker-publish-input"
                          placeholder="Select a date"
                          options={{
                            altInput: true,
                            altFormat: "F j, Y",
                            mode: "multiple",
                            dateFormat: "d.m.y",
                          }}
                        />
                      </Col>

                      <Col xxl={2} sm={4}>
                        <div className="input-light">
                          <select
                            className="form-control"
                            name="choices-single-default"
                            id="idType"
                          >
                            <option value="all" defaultValue>
                              All
                            </option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Intership">Intership</option>
                            <option value="Freelance">Freelance</option>
                          </select>
                        </div>
                      </Col>

                      <Col xxl={2} sm={4}>
                        <button
                          type="button"
                          className="btn btn-primary w-100"
                        >
                          <i className="ri-equalizer-fill me-1 align-bottom"></i>{" "}
                          Filters
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>

              <Row className="job-list-row" id="companies-list">
                {(companiesList || []).map((item, key) => (
                  <Col xxl={3} md={6} key={key}>
                    <Card className="card companiesList-card">
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
                          <Link to="#">
                            <h5 className="mt-3 company-name">{item.lable}</h5>
                          </Link>
                          <div className="d-none company-desc">
                            {item.company_info}
                          </div>
                          <p className="text-muted industry-type">
                            {item.industry_type}
                          </p>
                          <div className="d-none">
                            <span className="employee">{item.employee}</span>
                            <span className="location">{item.location}</span>
                            <span className="rating">{item.rating}</span>
                            <span className="website">{item.website}</span>
                            <span className="email">{item.email}</span>
                            <span className="since">{item.since}</span>
                          </div>
                        </div>
                        {/* <div>
                          <button
                            type="button"
                            className="btn btn-soft-primary w-100 viewcompany-list"
                          >
                            <span className="vacancy">{item.vacancy}</span> Jobs
                            Available
                          </button>
                        </div> */}
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Pagination
                perPageData={perPageData}
                data={jobCompanies}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                className="g-0 justify-content-end mb-4" />

            </Col>
            <Col xxl={3}>
              <Card id="company-overview">
                <CardBody>
                  <div className="avatar-lg mx-auto mb-3">
                    <div className="avatar-title bg-light rounded">
                      <img
                        src={img6}
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

export default CompaniesList;
