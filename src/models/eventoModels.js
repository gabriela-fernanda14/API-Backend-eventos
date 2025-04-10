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
}

export default new EventoModel();