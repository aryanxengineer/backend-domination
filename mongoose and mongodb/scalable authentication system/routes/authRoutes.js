// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { isLoggedIn, isAdmin, isTeacher, isStudent } = require('../middleware/authMiddleware');

// Auth pages
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);

router.get('/logout', authController.logout);

// Dashboards
router.get('/admin/dashboard', isLoggedIn, isAdmin, (req, res) => {
  res.render('dashboard-admin', { user: req.session.user });
});

router.get('/teacher/dashboard', isLoggedIn, isTeacher, (req, res) => {
  res.render('dashboard-teacher', { user: req.session.user });
});

router.get('/student/dashboard', isLoggedIn, isStudent, (req, res) => {
  res.render('dashboard-student', { user: req.session.user });
});

module.exports = router;
