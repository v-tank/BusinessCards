const router = require("express").Router();
const contactsController = require('../../controllers/contactsController');

// "/api/contact"
router.route("/")
  .get(contactsController.findAll)
	.post(contactsController.add);

// "/api/contact/:id"
router.route("/:id")
  .delete(contactsController.remove)
	.get(contactsController.findById)
	// .put(contactsController.update);


module.exports = router;
