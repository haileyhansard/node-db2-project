const server = require('./api/server');

const PORT = 3500;

server.listen(PORT, () => {
    console.log(`API is running on port ${PORT} for DB2 Project`);
});