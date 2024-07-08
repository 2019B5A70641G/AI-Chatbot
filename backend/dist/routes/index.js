import { Router } from "express";
import userRouter from "./userRoutes.js";
import chatRoutes from "./chatRoutes.js";
const appRouter = Router();
appRouter.use("/user", userRouter); // domain/api/v1/user
appRouter.use("/chat", chatRoutes); // domain/api/v1/chat 
export default appRouter;
//# sourceMappingURL=index.js.map