import { Router } from "express";
import { getAllUsers, loginUser, signUpUser, userLogout, verifyUser } from "../controllers/userController.js";
import { loginValidator, signupValidator, validate } from "../utils/validator.js";
import { verifyToken } from "../utils/tokenManager.js";
const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signupValidator), signUpUser);
userRouter.post("/login", validate(loginValidator), loginUser);
userRouter.get("/auth-status", verifyToken, verifyUser);
userRouter.get("/logout", verifyToken, userLogout);
export default userRouter;
//# sourceMappingURL=userRoutes.js.map