import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactXero = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get('/xero/contacts', {
          withCredentials: true,
        });
        console.log("✅ axios raw response:", res);

        setContacts(Array.isArray(res) ? res : []);
      } catch (err) {
        console.error("Failed to load contacts", err);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Contacts</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Contact ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Updated Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(contacts) && contacts.length > 0 ? (
            contacts.map(c => (
              <tr key={c.ContactID}>
                <td>{c.Name}</td>
                <td>{c.EmailAddress}</td>
                <td>{c.AccountNumber}</td>
                <td>{c.UpdatedDateUTC}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">No contacts found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactXero;
