import mongoose, { connect, ConnectOptions } from 'mongoose';

const dbName = "auth0-practice";
const dbPass = process.env.DB_PASSWORD;

// `mongodb+srv://busabro:${dbPass}@myshinycluster.qqcs1.mongodb.net/${dbName}?retryWrites=true&w=majority`
const connectToDB = async () => {
    try {
        const mongoURI = `mongodb://localhost/authpractice`;
        const options: ConnectOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        };
        await connect(mongoURI, options);
        console.log(`Established a connection to the database ${dbName}!`)
    } catch(err) {
        console.error("Something went wrong when connecting to the database", err);
        process.exit(1);
    }
};

export default connectToDB;