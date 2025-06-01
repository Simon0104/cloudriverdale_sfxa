const { getContacts } = require('../services/xeroContactsService');


  exports.getContacts = async (req, res) => {
    try {
      const contacts = await getContacts(req);
      res.json(contacts); 
    } catch (err) {
      console.error("❌ getContacts failed:", err);
      res.status(500).json({ error: 'Failed to fetch contacts' });
    }
  };




  