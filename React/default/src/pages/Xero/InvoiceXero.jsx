import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InvoiceXero = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await axios.get('/xero/invoices',{
          withCredential: true,
        });
        console.log("axios raw response:", res);

        setInvoices(Array.isArray(res) ? res : []);
      }catch(err){
        console.error("Failed to load invoices", err);
      }
    };
    fetchInvoices();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Invoices</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Invoice Number</th>
            <th>Contact Name</th>
            <th>Status</th>
            <th>Total</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(invoices) && invoices.length > 0 ? (
            invoices.map(inv => (
              <tr key={inv.InvoiceID}>
                <td>{inv.InvoiceID}</td>
                <td>{inv.InvoiceNumber}</td>
                <td>{inv.Contact?.Name}</td>
                <td>{inv.Status}</td>
                <td>{inv.Total}</td>
                <td>{inv.DateString || inv.Date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center text-muted">No invoices found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceXero;
