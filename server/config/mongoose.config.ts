import mongoose from 'mongoose';

const dbName = "auth0-practice";
const dbPass = process.env.DB_PASSWORD;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
// mongoose.connect(`mongodb+srv://busabro:${dbPass}@myshinycluster.qqcs1.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
mongoose.connect(`mongodb://localhost/authpractice`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established a connection to the database ${dbName}`))
    .catch(err => console.log("Something went wrong when connecting to the database", err));