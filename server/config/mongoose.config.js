const mongoose = require("mongoose");
const dbName = "auth0-practice";
const dbPass = process.env.DB_PASSWORD;
console.log('dbPass', dbPass)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(`mongodb+srv://busabro:${dbPass}@myshinycluster.qqcs1.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log(`Established a connection to the database ${dbName}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));