import express from "express";
import eventoController from "../controllers/eventoController.js";

const router = express.Router();
router.get("/", eventoController.getAll);

export default router;