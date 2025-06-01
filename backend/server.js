const cors = require("cors");
const session = require("express-session");
const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser"); 
require('dotenv').config();
const app = express();
const statusRoutes = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:3000", // ✅ frontend
  credentials: true                // ✅ allow cookie
}));
app.use(cookieParser());
app.set('trust proxy', 1);


app.use(session({
  secret: process.env.JWT_SECRET || 'your_session_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 3600000, // 1 hour (adjustable)
    secure: false,        // 本地必须 false！
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  }
}));

app.get('/xero/session/debug', (req, res) => {
  res.json({
    cookies: req.cookies,
    session: req.session,
    tokenSet: req.session?.tokenSet || null
  });
});
// http://localhost:8000/xero/session/debug

const sequelize = require('./config/db'); //connect to database
const asyncHandler = require('./utils/asyncHandler');
const errorHandler = require('./middlewares/errorHandler');

const indexRoutes = require('./routes/index');
const accountsRoutes = require('./routes/accountsRoutes');
const contactsRoutes = require('./routes/contactsRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');
const authRoutes = require('./routes/authRoutes');



// 全部挂载在 /xero 下
app.use('/', indexRoutes);
app.use('/xero/accounts', accountsRoutes);
app.use('/xero/contacts', contactsRoutes);
app.use('/xero/invoices', invoiceRoutes);
app.use('/xero/payments', paymentsRoutes);
app.use('/xero', statusRoutes);  
app.use('/xero', authRoutes);  

const PORT = process.env.PORT || 8000;
sequelize.sync().then(() => {
  console.log('✅ Database synced');
  app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
    console.log("✅ Session cookie config:", app.get('trust proxy'), session.Session);
  });
});

app.use(errorHandler);


