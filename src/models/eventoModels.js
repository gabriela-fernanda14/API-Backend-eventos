import prisma from "../../prisma/client.js";

class EventoModel {
    getAll = async () => {
        return await prisma.task.findMany();
    };

    create = async (descricao) => {
        return await prisma.task.create({
            data: {
                descricao,
            },
        });
    };
}

export default new EventoModel();