import express from "express";
import eventoController from "../controllers/eventoController.js";


const router = express.Router();
router.get("/", eventoController.getAll);
router.post("/", eventoController.create);
router.put("/:id", eventoController.update);

export default router;