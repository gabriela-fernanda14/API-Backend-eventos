import prisma from "../../prisma/client.js";

class EventoModel {
    getAll = async () => {
        return await prisma.task.findMany();
    };

    create = async (title, description, date, location, capacity, category, price) => {
        return await prisma.eventos.create({
            data: {
                title,
                description,
                date,
                location,
                capacity,
                category,
                price,
            },
        });
    };
    update = async (id, title, description, date, location, capacity, category, price) => {
        try {
            const evento = await prisma.eventos.update({
                where: { id },
                data: {
                    title,
                    description,
                    date,
                    location,
                    capacity,
                    category,
                    price,
                },
            });

            return evento;
        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    };
    delete = async (id) => {
        try {
            const eventoDeletado = await prisma.eventos.delete({
                where: { id },
            });

            return eventoDeletado;
        } catch (error) {
            console.log("Erro ao deletar eventoi!", error);
            throw error;
        }
    };
}

export default new EventoModel();