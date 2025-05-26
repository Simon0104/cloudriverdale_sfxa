const { getContacts } = require('../services/xeroContactsService');

function renderJsonList(data, key){
    const list = Array.isArray(data) ? data : data?.[key] || [];
    return `<pre>${JSON.stringify(list.slice(0, 10), null, 2)}</pre>`;
  }

  exports.getContacts = async (req, res) => {
    try {
      const contacts = await getContacts(req);
      res.json(contacts); 
    } catch (err) {
      console.error("❌ getContacts failed:", err);
      res.status(500).json({ error: 'Failed to fetch contacts' });
    }
  };




  