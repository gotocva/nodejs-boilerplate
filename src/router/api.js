import { router } from "../bootstrap/index";
import * as UserController from "../controller/UserController";

import { auth } from "../middleware/api";


router.get('/user', function(req,res){
    res.send("hello");
});

router.post('/user', UserController.store);
router.post('/user/verify-otp', [ auth ], UserController.verifyOtp);

module.exports = router;