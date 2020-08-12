const server = require('./api/server.js');

const PORT = process.env.PORT || 4500;

server.listen(PORT, () => {
    console.log(`API is running on port ${PORT} for DB2 Project`);
});