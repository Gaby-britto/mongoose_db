const express = require('express');
const connectDB = require('./src/config/database');
const router = require('./src/routes/router');

const app = express();
app.use(express.json());

connectDB();

app.use('/api', router);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    connectDB();
    console.log('server is running');
    
})