import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isApps, setIsApps] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const [isBaseUi, setIsBaseUi] = useState(false);
  const [isAdvanceUi, setIsAdvanceUi] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);
  const [isData, setIsData] = useState(false);




  //Calender
  const [isCalender, setCalender] = useState(false);

  // Apps
  const [isCRM, setIsCRM] = useState(false);


  // Authentication
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);

  // Pages
  const [isProfile, setIsProfile] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  // Charts
  const [isApex, setIsApex] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Apps") {
      setIsApps(false);
    }
    if (iscurrentState !== "Auth") {
      setIsAuth(false);
    }
    if (iscurrentState !== "Pages") {
      setIsPages(false);
    }
    if (iscurrentState !== "BaseUi") {
      setIsBaseUi(false);
    }
    if (iscurrentState !== "AdvanceUi") {
      setIsAdvanceUi(false);
    }
    if (iscurrentState !== "Forms") {
      setIsForms(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isApps,
    isAuth,
    isPages,
    isBaseUi,
    isAdvanceUi,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "analytics",
          label: "Analytics",
          link: "/dashboard-analytics",
          parentId: "dashboard",
        },
        {
          id: "crm",
          label: "CRM",
          link: "/dashboard-crm",
          parentId: "dashboard",
        },
        {
          id: "Xero",
          label: "Xero",
          // link: "http://localhost:8000/xero/login?redirect=/xero/dashboard",
          link: "/#",  
          isChildItem: true,
          click: function (e) {
            e.preventDefault(); 
            const loginUrl = `http://localhost:8000/xero/login?redirect=/xero/dashboard`;
            console.log("✅ 正在跳转 Xero 登录地址：", loginUrl);
            window.location.href = loginUrl; 
          },
          childItems:[
            {label: "Invoices", link: "/xero/invoices"},
            {label: "Accounts", link: "/xero/accounts"},
            {label: "Contacts", link: "/xero/contacts"},
            {label: "payments", link: "/xero/payments"}
          ],
          parentId: "dashboard",
          badgeColor: "success",
          badgeName: "New",
        },
      ],
    },
    {
      id: "apps",
      label: "Connect",
      icon: "ri-apps-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsApps(!isApps);
        setIscurrentState("Apps");
        updateIconSidebar(e);
      },
      stateVariables: isApps,
      subItems: [
        {
          id: "appscrm",
          label: "Acc SW",
          link: "/apps-job-companies-lists",
          click: function (e) {
            e.preventDefault();
            setIsCRM(!isCRM);
          },
        },
  
        {
          id: "filemanager",
          label: "Digitize",
          link: "/apps-file-manager",
          parentId: "apps",
        },
        {
          id: "filemanager",
          label: "PGs",
          link: "/apps-file-manager",
          parentId: "apps",
        },
        {
          id: "filemanager",
          label: "Stock",
          link: "/apps-file-manager",
          parentId: "apps",
        },
          ],
        },

    {
      label: "Data",
      isHeader: true,
    },
    {
      id: "data",
      label: "Data",
      icon: "ri-database-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsData(!isData);
        setIscurrentState("Data");
        updateIconSidebar(e);
      },
      stateVariables: isData,
      subItems: [
        {
          id: "charts",
          label: "Charts",
          icon: "ri-pie-chart-line",
          link: "/#",
          click: function (e) {
            e.preventDefault();
            setIsCharts(!isCharts);
            setIscurrentState("Charts");
            updateIconSidebar(e);
          },
          stateVariables: isCharts,
          subItems: [
            {
              id: "apexcharts",
              label: "Apexcharts",
              link: "/#",
              isChildItem: true,
              click: function (e) {
                e.preventDefault();
                setIsApex(!isApex);
              },
              stateVariables: isApex,
              childItems: [
                { id: 1, label: "Line", link: "/data/charts/line" },
                { id: 2, label: "Area", link: "/data/charts/area" },
                { id: 3, label: "Column", link: "/data/charts/column" },
                { id: 4, label: "Bar", link: "/data/charts/bar" },
                { id: 5, label: "Mixed", link: "/data/charts/mixed" },
                { id: 6, label: "Timeline", link: "/data/charts/timeline" },
                {
                  id: 7,
                  label: "Range Area",
                  link: "/charts-apex-range-area",
                  parentId: "apexcharts",
                  badgeColor: "success",
                  badgeName: "New",
                },
                {
                  id: 8,
                  label: "Funnel",
                  link: "/charts-apex-funnel",
                  parentId: "apexcharts",
                  badgeColor: "success",
                  badgeName: "New",
                },
                { id: 9, label: "Candlstick", link: "/charts-apex-candlestick" },
                { id: 10, label: "Boxplot", link: "/charts-apex-boxplot" },
                { id: 11, label: "Bubble", link: "/charts-apex-bubble" },
                { id: 12, label: "Scatter", link: "/charts-apex-scatter" },
                { id: 13, label: "Heatmap", link: "/charts-apex-heatmap" },
                { id: 14, label: "Treemap", link: "/charts-apex-treemap" },
                { id: 15, label: "Pie", link: "/charts-apex-pie" },
                { id: 16, label: "Radialbar", link: "/charts-apex-radialbar" },
                { id: 17, label: "Radar", link: "/charts-apex-radar" },
                { id: 18, label: "Polar Area", link: "/charts-apex-polar" },
                { id: 19, label: "Slope", link: "/charts-apex-slope", parentId: "charts", badgeColor: "success", badgeName: "New" },
              ],
            },
            {
              id: "chartjs",
              label: "Chartjs",
              link: "/charts-chartjs",
              parentId: "charts",
            },
            {
              id: "echarts",
              label: "Echarts",
              link: "/charts-echarts",
              parentId: "charts",
            },
          ],
        },

        {
          id: "tables",
          label: "Tables",
          icon: "ri-layout-grid-line",
          link: "/#",
          isChildItem: true,
          click: function (e) {
            e.preventDefault();
            setIsTables(!isTables);
            setIscurrentState("Tables");
            updateIconSidebar(e);
          },
          parentId: "data",
          stateVariables: isTables,
          childItems: [
            {
              id: "1",
              label: "Basic Tables",
              link: "/data/tables/basic",
            },
            {
              id: "2",
              label: "List Js",
              link: "/data/tables/listjs",
            },
            {
              id: "3",
              label: "React Datatables",
              link: "/data/tables/react",
            },
          ],
        },
      ]
    },


    {
      label: "Analytics",
      isHeader: true,
    },
    {
      id: "Analytics",
      label: "Analytics",
      icon: "ri-pencil-ruler-2-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsBaseUi(!isBaseUi);
        setIscurrentState("BaseUi");
        updateIconSidebar(e);
      },
      stateVariables: isBaseUi,
      subItems: [
        {
          id: "alerts",
          label: "Forecast",
          link: "/ui-alerts",
          parentId: "baseUi",
        },
        {
          id: "badges",
          label: "Summary",
          link: "/ui-badges",
          parentId: "baseUi",
        },
        {
          id: "buttons",
          label: "Cashflow",
          link: "/ui-buttons",
          parentId: "baseUi",
        },
        {
          id: "colors",
          label: "Payments",
          link: "/ui-colors",
          parentId: "baseUi",
        },
      ],
    },
  ];
    return <React.Fragment>{menuItems}</React.Fragment>;
  };
  export default Navdata;
  