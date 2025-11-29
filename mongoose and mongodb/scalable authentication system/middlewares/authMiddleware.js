// middleware/authMiddleware.js

exports.isLoggedIn = (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    }
    req.flash('error', 'Please login first');
    res.redirect('/login');
  };
  
  exports.isAdmin = (req, res, next) => {
    if (req.session.user.role === 'admin') return next();
    req.flash('error', 'Access denied');
    res.redirect('/login');
  };
  
  exports.isTeacher = (req, res, next) => {
    if (req.session.user.role === 'teacher') return next();
    req.flash('error', 'Access denied');
    res.redirect('/login');
  };
  
  exports.isStudent = (req, res, next) => {
    if (req.session.user.role === 'student') return next();
    req.flash('error', 'Access denied');
    res.redirect('/login');
  };
  