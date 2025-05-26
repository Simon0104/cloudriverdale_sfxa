import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentXero = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPaymemts = async () => {
      try {
        const res = await axios.get('/xero/payments', {
          withCredentials: true,
        });
        console.log("axios raw response:", res);

        setPayments(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Failed to load payment", err);
      }
    };

    fetchPaymemts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Payments</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Invoice ID</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(payments) && payments.length > 0 ? (
            payments.map(p => (
              <tr key={p.PaymentID}>
                <td>{p.Invoice?.InvoiceNumber}</td>
                <td>{p.Account?.Name}</td>
                <td>{p.Amount}</td>
                <td>{p.Date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">No payments found</td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default PaymentXero;
