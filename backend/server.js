const http = require('http');
const app = require('./app');
const connectDatabase =require('./config/database');
const SERVER_PORT = process.env.SERVER_PORT;
const CLIENT_PORT = process.env.CLIENT_PORT;

if(process.env.NODE_ENV!='PRODUCTION'){
    require('dotenv').config({ path: 'backend/config/config.env'});
}

const server = http.createServer(app);


async function startServer() {
    await connectDatabase();
    const { loadPlanetsData}= require('./src/models/planets.model');
    await loadPlanetsData();
    server.listen(SERVER_PORT, () => {
        console.log(`Listening on ${SERVER_PORT}...`);
        console.log(`Client listening on ${CLIENT_PORT}.... `)
    })
}

startServer();