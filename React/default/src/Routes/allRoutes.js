import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import DashboardAnalytics from "../pages/DashboardAnalytics";
import DashboardCrm from "../pages/DashboardCrm";
import DashboardEcommerce from "../pages/DashboardEcommerce";

import DashboardCrypto from "../pages/DashboardCrypto";
import DashboardProject from "../pages/DashboardProject";
import DashboardNFT from "../pages/DashboardNFT";
import DashboardJob from "../pages/DashboardJob/";

//Xero
import XeroDashboard from "../pages/Xero/XeroDashboard";
import ContactXero from "../pages/Xero/ContactXero";
import PaymentXero from "../pages/Xero/PaymentXero";
import AccountXero from "../pages/Xero/AccountXero";
import InvoiceXero from "../pages/Xero/InvoiceXero";

//Crm Pages
import CrmCompanies from "../pages/Crm/CrmCompanies";
import CrmContacts from "../pages/Crm/CrmContacts";
import CrmDeals from "../pages/Crm/CrmDeals/index";
import CrmLeads from "../pages/Crm/CrmLeads/index";

// //Invoices
// import InvoiceList from "../pages/Invoices/InvoiceList";
// import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
// import InvoiceDetails from "../pages/Invoices/InvoiceDetails";


// //Forms
// import BasicElements from "../pages/Forms/BasicElements/BasicElements";
// import FormSelect from "../pages/Forms/FormSelect/FormSelect";
// import FormEditor from "../pages/Forms/FormEditor/FormEditor";
// import CheckBoxAndRadio from "../pages/Forms/CheckboxAndRadio/CheckBoxAndRadio";
// import Masks from "../pages/Forms/Masks/Masks";
// import FileUpload from "../pages/Forms/FileUpload/FileUpload";
// import FormPickers from "../pages/Forms/FormPickers/FormPickers";
// import FormRangeSlider from "../pages/Forms/FormRangeSlider/FormRangeSlider";
// import Formlayouts from "../pages/Forms/FormLayouts/Formlayouts";
// import FormValidation from "../pages/Forms/FormValidation/FormValidation";
// import FormWizard from "../pages/Forms/FormWizard/FormWizard";
// import FormAdvanced from "../pages/Forms/FormAdvanced/FormAdvanced";
// import Select2 from "../pages/Forms/Select2/Select2";

//Tables
import BasicTables from '../pages/Data/Tables/BasicTables/BasicTables';
import ListTables from '../pages/Data/Tables/ListTables/ListTables';
import ReactTable from "../pages/Data/Tables/ReactTables";

// //Icon pages
// import RemixIcons from "../pages/Icons/RemixIcons/RemixIcons";
// import BoxIcons from "../pages/Icons/BoxIcons/BoxIcons";
// import MaterialDesign from "../pages/Icons/MaterialDesign/MaterialDesign";
// import FeatherIcons from "../pages/Icons/FeatherIcons/FeatherIcons";
// import LineAwesomeIcons from "../pages/Icons/LineAwesomeIcons/LineAwesomeIcons";
// import CryptoIcons from "../pages/Icons/CryptoIcons/CryptoIcons";

// //Maps
// import GoogleMaps from "../pages/Maps/GoogleMaps/GoogleMaps";

//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';
import BasicSignUp from '../pages/AuthenticationInner/Register/BasicSignUp';
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';
//pages
import Starter from '../pages/Pages/Starter/Starter';
import SimplePage from '../pages/Pages/Profile/SimplePage/SimplePage';
import Settings from '../pages/Pages/Profile/Settings/Settings';
import Team from '../pages/Pages/Team/Team';
import Timeline from '../pages/Pages/Timeline/Timeline';
import Faqs from '../pages/Pages/Faqs/Faqs';
import Pricing from '../pages/Pages/Pricing/Pricing';
import Gallery from '../pages/Pages/Gallery/Gallery';
import Maintenance from '../pages/Pages/Maintenance/Maintenance';
import ComingSoon from '../pages/Pages/ComingSoon/ComingSoon';
import SiteMap from '../pages/Pages/SiteMap/SiteMap';
import SearchResults from '../pages/Pages/SearchResults/SearchResults';

import CoverPasswReset from '../pages/AuthenticationInner/PasswordReset/CoverPasswReset';
import BasicLockScreen from '../pages/AuthenticationInner/LockScreen/BasicLockScr';
import CoverLockScreen from '../pages/AuthenticationInner/LockScreen/CoverLockScr';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import BasicSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg';
import CoverSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg';
import BasicTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify';
import CoverTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';

import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

// //APi Key
// import APIKey from "../pages/APIKey/index";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//Charts
import LineCharts from "../pages/Data/Charts/ApexCharts/LineCharts";
import AreaCharts from "../pages/Data/Charts/ApexCharts/AreaCharts";
import ColumnCharts from "../pages/Data/Charts/ApexCharts/ColumnCharts";
import BarCharts from "../pages/Data/Charts/ApexCharts/BarCharts";
import MixedCharts from "../pages/Data/Charts/ApexCharts/MixedCharts";
import TimelineCharts from "../pages/Data/Charts/ApexCharts/TimelineCharts";
import CandlestickChart from "../pages/Data/Charts/ApexCharts/CandlestickChart";
import BoxplotCharts from "../pages/Data/Charts/ApexCharts/BoxplotCharts";
import BubbleChart from "../pages/Data/Charts/ApexCharts/BubbleChart";
import ScatterCharts from "../pages/Data/Charts/ApexCharts/ScatterCharts";
import HeatmapCharts from "../pages/Data/Charts/ApexCharts/HeatmapCharts";
import TreemapCharts from "../pages/Data/Charts/ApexCharts/TreemapCharts";
import PieCharts from "../pages/Data/Charts/ApexCharts/PieCharts";
import RadialbarCharts from "../pages/Data/Charts/ApexCharts/RadialbarCharts";
import RadarCharts from "../pages/Data/Charts/ApexCharts/RadarCharts";
import PolarCharts from "../pages/Data/Charts/ApexCharts/PolarCharts";
import ChartsJs from "../pages/Data/Charts/ChartsJs/index";
import Echarts from "../pages/Data/Charts/ECharts/index";


import AccSwPage from "../pages/Company/CompaniesList/AccSwPage";


import FileManager from "../pages/FileManager";


const authProtectedRoutes = [
  { path: "/dashboard-analytics", component: <DashboardAnalytics /> },
  { path: "/dashboard-crm", component: <DashboardCrm /> },
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },
  // { path: "/dashboard-crypto", component: <DashboardCrypto /> },
  // { path: "/dashboard-projects", component: <DashboardProject /> },
  // { path: "/dashboard-nft", component: <DashboardNFT /> },
  // { path: "/dashboard-job", component: <DashboardJob /> },
  // { path: "/dashboard-blog", component: <DashboardBlog /> },


  { path: "/apps-file-manager", component: <FileManager /> },
  // { path: "/apps-todo", component: <ToDoList /> },

  //Crm
  { path: "/crm-contacts", component: <CrmContacts /> },
  { path: "/crm-companies", component: <CrmCompanies /> },
  { path: "/crm-deals", component: <CrmDeals /> },
  { path: "/crm-leads", component: <CrmLeads /> },

  // //Invoices
  // { path: "/apps-invoices-list", component: <InvoiceList /> },
  // { path: "/apps-invoices-details", component: <InvoiceDetails /> },
  // { path: "/apps-invoices-create", component: <InvoiceCreate /> },


  // //charts
  // { path: "/charts-apex-line", component: <LineCharts /> },
  // { path: "/charts-apex-area", component: <AreaCharts /> },
  // { path: "/charts-apex-column", component: <ColumnCharts /> },
  // { path: "/charts-apex-bar", component: <BarCharts /> },
  // { path: "/charts-apex-mixed", component: <MixedCharts /> },
  // { path: "/charts-apex-timeline", component: <TimelineCharts /> },
  // { path: "/charts-apex-range-area", component: <RangeArea /> },
  // { path: "/charts-apex-funnel", component: <FunnelChart /> },
  // { path: "/charts-apex-candlestick", component: <CandlestickChart /> },
  // { path: "/charts-apex-boxplot", component: <BoxplotCharts /> },
  // { path: "/charts-apex-bubble", component: <BubbleChart /> },
  // { path: "/charts-apex-scatter", component: <ScatterCharts /> },
  // { path: "/charts-apex-heatmap", component: <HeatmapCharts /> },
  // { path: "/charts-apex-treemap", component: <TreemapCharts /> },
  // { path: "/charts-apex-pie", component: <PieCharts /> },
  // { path: "/charts-apex-radialbar", component: <RadialbarCharts /> },
  // { path: "/charts-apex-radar", component: <RadarCharts /> },
  // { path: "/charts-apex-polar", component: <PolarCharts /> },
  // { path: "/charts-apex-slope", component: <SlopeCharts /> },

  // { path: "/charts-chartjs", component: <ChartsJs /> },
  // { path: "/charts-echarts", component: <Echarts /> },


  // // Forms
  // { path: "/forms-elements", component: <BasicElements /> },
  // { path: "/forms-select", component: <FormSelect /> },
  // { path: "/forms-editors", component: <FormEditor /> },
  // { path: "/forms-checkboxes-radios", component: <CheckBoxAndRadio /> },
  // { path: "/forms-masks", component: <Masks /> },
  // { path: "/forms-file-uploads", component: <FileUpload /> },
  // { path: "/forms-pickers", component: <FormPickers /> },
  // { path: "/forms-range-sliders", component: <FormRangeSlider /> },
  // { path: "/forms-layouts", component: <Formlayouts /> },
  // { path: "/forms-validation", component: <FormValidation /> },
  // { path: "/forms-wizard", component: <FormWizard /> },
  // { path: "/forms-advanced", component: <FormAdvanced /> },
  // { path: "/forms-select2", component: <Select2 /> },

  //Tables
  { path: "/data/tables/basic", component: <BasicTables /> },
  { path: "/data/tables/listjs", component: <ListTables /> },
  { path: "/data/tables/react", component: <ReactTable /> },



  //Job pages
  // { path: "/apps-job-statistics", component: <Statistics /> },
  // { path: "/apps-job-lists", component: <JobList /> },
  // { path: "/apps-job-grid-lists", component: <JobGrid /> },
  // { path: "/apps-job-details", component: <JobOverview /> },
  // { path: "/apps-job-candidate-lists", component: <CandidateList /> },
  // { path: "/apps-job-candidate-grid", component: <CandidateGrid /> },
  // { path: "/apps-job-application", component: <Application /> },
  // { path: "/apps-job-new", component: <NewJobs /> },
  { path: "/apps-job-companies-lists", component: <AccSwPage /> },
  // { path: "/connect", component: <Documents />},
  // { path: "/apps-job-categories", component: <JobCategories /> },

  //xero/routes
  { path: "/xero/dashboard", component: <XeroDashboard />},
  { path: "/xero/accounts", component: <AccountXero /> },
  { path: "/xero/contacts", component: <ContactXero /> },
  { path: "/xero/payments", component: <PaymentXero /> },
  { path: "/xero/invoices", component: <InvoiceXero /> },

  //User Profile
  // { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-signup-basic", component: <BasicSignUp /> },
  { path: "/auth-signup-cover", component: <CoverSignUp /> },
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-twostep-cover", component: <CoverTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-coming-soon", component: <ComingSoon /> },

  // { path: "/landing", component: <OnePage /> },
  // { path: "/nft-landing", component: <NFTLanding /> },
  // { path: "/job-landing", component: <JobLanding /> },

  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };