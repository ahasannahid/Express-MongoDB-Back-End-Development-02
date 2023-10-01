const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const PORT = process.env.RUNNING_PORT || 8080;

// Connect to DB and start server
mongoose
    .connect(process.env.DATABASE)
    .then(() => {
        console.log("Database Connected Successfully")
        app.listen(PORT, () => {
            console.log(`Server Running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));