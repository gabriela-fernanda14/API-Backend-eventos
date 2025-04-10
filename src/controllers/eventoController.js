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
  update = async (req, res) => {
    const { id } = req.params;
    const { title, description, date, location, capacity, category, price } = req.body;

    try {
      const eventoAtualizado = await eventoModel.update(
        Number(id),
        title,
        description,
        date,
        location,
        capacity,
        category,
        price
      );

      if (!eventoAtualizado) {
        return res.status(404).json({ erro: "Evento não encontrado!" });
      }

      res.json(eventoAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar evento!" });
    }
  };
  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await eventoModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Evento não encontrado" });
      }

      res.status(200).send({ message: "Evento deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao excluir evento!" });
    }
  };


}


export default new EventoController();