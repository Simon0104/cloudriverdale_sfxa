// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import InvoiceXero from './InvoiceXero';
// import AccountXero from './AccountXero';
// import ContactXero from './ContactXero';
// import PaymentXero from './PaymentXero';

// const XeroDashboard = () => {
//   const [activeTab, setActiveTab] = useState("invoices");

//   useEffect(() => {
//     const token = JSON.parse(sessionStorage.getItem("authUser"))?.token;
//     if (!token) {
//       console.warn("⚠️ No token found in sessionStorage");
//       return;
//     }

//     axios.get("http://localhost:8000/xero/status", {
//       withCredentials: true,
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     .then(res => {
//       console.log("✅ Dashboard /xero/status:", res.data);
//       if (!res.data?.connected) {
//         const redirect = encodeURIComponent(window.location.pathname);
//         window.location.href = `http://localhost:8000/xero/login?redirect=${redirect}`;
//       }
//     })
//     .catch(err => {
//       console.error("❌ Dashboard /xero/status 请求失败:", err?.response?.data || err.message);
//       const redirect = encodeURIComponent(window.location.pathname);
//       window.location.href = `http://localhost:8000/xero/login?redirect=${redirect}`;
//     });
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>Xero Dashboard</h2>

//       <div className="btn-group mb-4">
//         <button className="btn btn-outline-primary" onClick={() => setActiveTab("invoices")}>Invoices</button>
//         <button className="btn btn-outline-primary" onClick={() => setActiveTab("accounts")}>Accounts</button>
//         <button className="btn btn-outline-primary" onClick={() => setActiveTab("contacts")}>Contacts</button>
//         <button className="btn btn-outline-primary" onClick={() => setActiveTab("payments")}>Payments</button>
//       </div>

//       <div className="border rounded p-3 bg-white">
//         {activeTab === "invoices" && <InvoiceXero />}
//         {activeTab === "accounts" && <AccountXero />}
//         {activeTab === "contacts" && <ContactXero />}
//         {activeTab === "payments" && <PaymentXero />}
//       </div>
//     </div>
//   );
// };

// export default XeroDashboard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

import InvoiceXero from './InvoiceXero';
import AccountXero from './AccountXero';
import ContactXero from './ContactXero';
import PaymentXero from './PaymentXero';


const XeroDashboard = () => {
  const [activeTab, setActiveTab] = useState("invoices");

  useEffect(() => {
    console.log("🔍 token in sessionStorage", sessionStorage.getItem("authUser"));

    const token = JSON.parse(sessionStorage.getItem("authUser"))?.token;
    if (!token) {
      console.warn("⚠️ No token found in sessionStorage");
      return;
    }

    axios.get("http://localhost:8000/xero/status", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      console.log("✅ /xero/status:", res.data);
    })
    .catch(err => {
      console.error("❌ Failed to get /xero/status:", err?.response?.data || err.message);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Xero Dashboard</h2>
      <div className="btn-group mb-4">
        <button className="btn btn-outline-primary" onClick={() => setActiveTab("invoices")}>Invoices</button>
        <button className="btn btn-outline-primary" onClick={() => setActiveTab("accounts")}>Accounts</button>
        <button className="btn btn-outline-primary" onClick={() => setActiveTab("contacts")}>Contacts</button>
        <button className="btn btn-outline-primary" onClick={() => setActiveTab("payments")}>Payments</button>
      </div>
      <div className="border rounded p-3 bg-white">
        {activeTab === "invoices" && <InvoiceXero />}
        {activeTab === "accounts" && <AccountXero />}
        {activeTab === "contacts" && <ContactXero />}
        {activeTab === "payments" && <PaymentXero />}
      </div>
    </div>
  );
};

export default XeroDashboard;
