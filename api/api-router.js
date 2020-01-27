const router = require('express').Router();

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

// // to hash a pasword
// // Store hash in your password db
// var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(12);
// var hash = bcrypt.hashSync('B4c0/\/', salt);

// // to check a password
// // load hash from your password db
// bcrypt.compareSync('B4c0/\/', hash); // true
// bcrypt.compareSync('not_bacon', hash); // false

// // auto-gen a salt and hash
// var hash = bcrypt.hashSync('bacon', 12);


router.get('/', (req, res) => {
  res.json({ api: "It's alive" });
});

module.exports = router;
