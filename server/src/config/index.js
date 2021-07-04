const mongoose = require("mongoose");

async function connectDB() {
    try {
        const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jpf4w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("DB connected successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
