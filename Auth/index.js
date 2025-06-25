
// server listening 

const express = require('express');
const DbConnection = require('./db');
const UserRouter = require('./routes/user.routes');
const movieRouter = require('./routes/movie.routes');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", UserRouter);
app.use("/api/cinema", movieRouter);





app.listen(8080, async () => {
    try {
        await DbConnection();
        console.log('Server is running on port 8080');

    } catch (error) {
        console.error('Error starting the server:', error);

    }
});