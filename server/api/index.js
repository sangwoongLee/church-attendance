const express = require('express');
const router = express.Router();
router.use('/member', require('./member'));

router.get('/', function(req, res) {
  MODELS.MEMBERS.findAll().then(members => {
    console.log(members);
  })
});


module.exports = router;