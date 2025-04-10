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
                    title: title !== undefined ? title : true,
                    description: description !== undefined ? description : true,
                    date: date !== undefined ? date : true,
                    location: location !== undefined ? location : true,
                    capacity: capacity !== undefined ? capacity : true,
                    category: category !== undefined ? category : true,
                    price: price !== undefined ? price : true,
                },
            });

            return evento;
        } catch (error) {
            console.log("Error", error);
            throw error;
        }
    };
}

export default new EventoModel();