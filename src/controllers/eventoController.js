import eventoModel from "../models/eventoModels.js";

class EventoController {
  getAll = async (req, res) => {
    try {
      const eventos = await eventoModel.getAll();
      res.json(eventos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar eventos" });
    }
  };
}

export default new EventoController();