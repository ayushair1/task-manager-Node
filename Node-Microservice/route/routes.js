const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");

router.post("/auth/signup", userCtrl.register);


// router.get("/admin/all/:id",userCtrl.AllTravelPlans)



module.exports = router;