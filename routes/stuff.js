const express = require('express');
const router = express.Router();

const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/', auth, stuffCtrl.createThing);
router.put('/:id', auth, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', auth, stuffCtrl.getAllThings);

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const auth = require('../middleware/auth');

// const stuffCtrl = require('../controllers/stuff');

// router.get('/', auth, stuffCtrl.getAllStuff);
// router.post('/', auth, stuffCtrl.createThing);
// router.get('/:id', auth, stuffCtrl.getOneThing);
// router.put('/:id', auth, stuffCtrl.modifyThing);
// router.delete('/:id', auth, stuffCtrl.deleteThing);

// module.exports = router;