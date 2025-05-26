import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccountXero = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const res = await axios.get('/xero/accounts', {
          withCredentials: true,
        });
        console.log("axios raw response:", res);

        setAccounts(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Failed to load account", err);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Xero Accounts</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(accounts) && accounts.length > 0 ? (
            accounts.map(account => (
              <tr key={account.AccountID}>
                <td>{account.Code}</td>
                <td>{account.Name}</td>
                <td>{account.Type}</td>
                <td>{account.Status}</td>
                <td>{account.Description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">No accounts found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AccountXero;
