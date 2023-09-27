import express from "express";
import payloadRoute from "./payload.route";
const router = express.Router();

router.use("/login", payloadRoute);

export default router;
