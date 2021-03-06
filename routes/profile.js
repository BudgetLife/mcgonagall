const router = require('express').Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    // user not logged in
    res.redirect('auth/login');
  } else {
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.send(`${req.user.username} is logged in!`);
});

module.exports = router;
