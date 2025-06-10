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
const cashflowRoutes = require('./routes/cashflowRoutes');

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
const xeroRoutes = require('./routes/xeroRoutes')

// cashflow
app.use('/api/cashflow', cashflowRoutes);


// 全部挂载在 /xero 下
app.use('/', indexRoutes);
app.use('/xero/accounts', accountsRoutes);
app.use('/xero/contacts', contactsRoutes);
app.use('/xero/invoices', invoiceRoutes);
app.use('/xero/payments', paymentsRoutes);
app.use('/xero', statusRoutes);  
app.use('/xero', authRoutes);  
app.use(xeroRoutes);

app.listen(8000, () => {
  console.log('✅ Server running on port 8000');
});


app.use(errorHandler);


