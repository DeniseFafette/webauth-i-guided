const router = require('express').Router();
const Users = require('../users/users-model.js');

// require bcrypt
const bc = require('bcryptjs');

// add async
router.get('/secret', (req, res, next) => {
  if(req.headers.authorization) {
    bc.hash(req.headers.authorization, 12, (err, hash) => { // 12 is the number of rounds
      if (err) {
        res.status(500).json({ oops: 'it broke' });
      } else {
        res.status(200).json({ hash });
      }
    });
  } else {
    res.status(400).json({ error: 'missing header' });
  }
});


router.post('/register', (req, res) => {
  let user = req.body;

  // hash password before saving the user

  const hash = bc.hashSync(req.body.password, 12);

  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// bscrypt.compareSync()

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
