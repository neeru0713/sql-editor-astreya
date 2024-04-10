import  { Router } from "express";
import  queryController from "../controllers/query.controller.ts";
const router = Router();

router.post("/", queryController.sendQueryHandler);

export default router;
