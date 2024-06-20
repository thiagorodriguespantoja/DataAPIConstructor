const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

if (process.env.NODE_ENV !== 'test') {
    require('./config/db');
}

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
