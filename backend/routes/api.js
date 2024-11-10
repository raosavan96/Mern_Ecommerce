const router = require("express").Router();
const userSignInfo = require("../controller/userSignin");
const userLoginInfo = require("../controller/userLogin");
const userDetailsMain = require("../controller/userDetails");
const authToken = require("../middleware/authToken");
const userLogoutController = require("../controller/userLogout");

router.post("/signup", userSignInfo.userSigninController);
router.post("/login", userLoginInfo.userLoginController);

router.get("/user-details", authToken, userDetailsMain.userDatialsController);
router.get("/user-logout", userLogoutController.userLogoutController);

module.exports = router;
