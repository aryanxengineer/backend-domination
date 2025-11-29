// controllers/authController.js
const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getRegister = (req, res) => {
  res.render('register');
};

exports.postRegister = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      req.flash('error', 'Email already exists');
      return res.redirect('/register');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    req.flash('success', 'Registered successfully! Please login.');
    res.redirect('/login');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Registration failed');
    res.redirect('/register');
  }
};

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      req.flash('error', 'Invalid credentials');
      return res.redirect('/login');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      req.flash('error', 'Invalid credentials');
      return res.redirect('/login');
    }

    req.session.user = {
      _id: user._id,
      name: user.name,
      role: user.role,
    };

    // Role-based redirection
    if (user.role === 'admin') return res.redirect('/admin/dashboard');
    if (user.role === 'teacher') return res.redirect('/teacher/dashboard');
    return res.redirect('/student/dashboard');
  } catch (err) {
    console.log(err);
    req.flash('error', 'Login failed');
    res.redirect('/login');
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
