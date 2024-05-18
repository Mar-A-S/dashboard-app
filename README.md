# Dashboard App

Este projeto é um dashboard administrativo simples para gerenciar uma lista de funcionários. Inclui serviços de backend e frontend usando as seguintes tecnologias:
- **Frontend**: React com Next.js, Chakra UI, TypeScript
- **Backend**: Node.js com Express.js, MongoDB (Mongoose)

## Estrutura do Projeto

```
dashboard-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── public/
│   ├── next.config.js
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── docker-compose.yml
└── README.md
```

## Pré-requisitos

- Docker
- Docker Compose
- Git

## Primeiros Passos

### 1. Clonar o Repositório

Clone o repositório principal:

```sh
git clone <url-do-repositorio-principal>
cd dashboard-app
```

### 2. Configurar Variáveis de Ambiente

Crie um arquivo `.env` no diretório `backend` com o seguinte conteúdo:

```env
MONGO_URI=mongodb://mongo:27017/employees
```

### 3. Construir e Executar os Contêineres

Execute o seguinte comando para construir e iniciar os contêineres:

```sh
docker-compose up --build
```

Isso iniciará os seguintes serviços:
- **backend**: Disponível em `http://localhost:5000`
- **frontend**: Disponível em `http://localhost:3000`
- **mongo**: Instância do MongoDB

### 4. Acessar a Aplicação

- Frontend: Abra [http://localhost:3000](http://localhost:3000) no seu navegador para acessar o frontend.
- Backend: Você pode testar a API do backend em [http://localhost:5000/api/employees](http://localhost:5000/api/employees).

## Comandos Úteis

### Parar os Contêineres

```sh
docker-compose down
```

### Reconstruir os Contêineres

```sh
docker-compose up --build
```

### Ver Logs

```sh
docker logs dashboard-app_backend_1
docker logs dashboard-app_frontend_1
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
