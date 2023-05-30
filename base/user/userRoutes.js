
import express from'express';
const useRouter = express.Router();
import { register,login} from "./userController.js";
// const auth = require("../middlewares/auth");
// const permission = require("../middlewares/permission");

useRouter.post("/register", register);
useRouter.post("/login", login);

// router.get("/logout", logout);
// router.get("/getuser", protect, getUser);
// router.get("/loggedin", loginStatus);
// router.patch("/updateuser", protect, updateUser);
// router.patch("/changepassword", protect, changePassword);
// router.post("/forgotpassword", forgotPassword);
// router.put("resetpassword/:resetToken", resetPassword);
export default useRouter;