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

2. Instale as dependências:

npm install



3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:


DATABASE_URL="file:./dev.db"

4. Inicie o servidor:

npm run dev

npx prisma migrate dev

## Como testar

1. Crie um evento:
Exemplo de Resposta:
{
    "title": "Evento de Teste",
    "description": "Descrição do evento",
    "date": "2025-04-15",
    "location": "São Paulo",
    "capacity": 100,
    "category": "Tecnologia",
    "price": 50
  }'


2. Obtenha todos os eventos:
Exemplo de Resposta:
  {
    "id": 1,
    "title": "Evento de Teste",
    "description": "Descrição do evento",
    "date": "2025-04-15",
    "location": "São Paulo",
    "capacity": 100,
    "category": "Tecnologia",
    "price": 50
  }

3. Obtenha um evento específico:
Exemplo de Resposta:
{
  "id": 1,
  "title": "Evento de Teste",
  "description": "Descrição do evento",
  "date": "2025-04-15",
  "location": "São Paulo",
  "capacity": 100,
  "category": "Tecnologia",
  "price": 50
}

4. Atualize um evento:
Exemplo de Resposta:
{
    "title": "Novo Evento",
    "description": "Descrição do novo evento",
    "date": "2025-05-01",
    "location": "Rio de Janeiro",
    "capacity": 200,
    "category": "Educação",
    "price": 100
  }'
Exemplo de Resposta:
{
  "id": 1,
  "title": "Evento Atualizado",
  "description": "Descrição atualizada",
  "date": "2025-06-01",
  "location": "Curitiba",
  "capacity": 150,
  "category": "Negócios",
  "price": 75
}

5. Exclua um evento:
Exemplo de Resposta:
{
  "message": "Evento deletado com sucesso"
}

## Referências

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Autor

https://github.com/gabriela-fernanda14

