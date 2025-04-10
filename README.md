# API Backend Eventos

## Descrição

Este projeto é um back-end de gerenciamento de eventos. O sistema permite que os usuários criem, leiam, atualizem e excluam eventos.

## Tecnologias

- Node.js
- Express.js
- Prisma
- Thunder Client
- SQLite

## Como executar

1. Clone o repositório:

git clone https://github.com/gabriela-fernanda14/API-Backend-eventos.git
```

3. Instale as dependências:

npm install

4. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:


DATABASE_URL="file:./dev.db"

5. Inicie o servidor:

npm run dev



## Como testar

1. Crie um evento:
{
    "title": "Evento de Teste",
    "description": "Descrição do evento",
    "date": "2025-04-15",
    "location": "São Paulo",
    "capacity": 100,
    "category": "Tecnologia",
    "price": 50
  }'
```

2. Obtenha todos os eventos:

```bash
curl --request GET \
  --url http://localhost:3000/events
```

3. Obtenha um evento específico:

```bash
curl --request GET \
  --url http://localhost:3000/events/1
```

4. Atualize um evento:
{
    "title": "Novo Evento",
    "description": "Descrição do novo evento",
    "date": "2025-05-01",
    "location": "Rio de Janeiro",
    "capacity": 200,
    "category": "Educação",
    "price": 100
  }'
```

5. Exclua um evento:

```bash
curl --request DELETE \
  --url http://localhost:3000/events/1
```

## Referências

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Autor

[2TDS](https://github.com/2TDS)

