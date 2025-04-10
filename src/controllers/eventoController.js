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
  create = async (req, res) => {
    const { title, description, date, location, } = req.body;
    // const descricao = req.body.descricao;
    try {
      if (!title) {
        return res.status(400).json({ erro: "Titulo é obrigatório" });
      }
      if (!description) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }
      if (!date) {
        return res.status(400).json({ erro: "Data é obrigatória" });
      }
      if (!location) {
        return res.status(400).json({ erro: "Local é obrigatório" });
      }
     
      const novoEvento = await eventoModel.create(title, description, date, location);
      res.status(201).json(novoEvento);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar evento" });
    }
  };

}


export default new EventoController();