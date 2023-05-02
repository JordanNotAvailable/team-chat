const { addMessage, getMessages } = require("../schemas/resolvers");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;