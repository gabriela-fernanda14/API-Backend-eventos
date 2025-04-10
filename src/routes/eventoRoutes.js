import express from "express";
import eventoController from "../controllers/eventoController.js";

const router = express.Router();
router.get("/", eventoController.getAll);
router.post("/", eventoController.create);

export default router;