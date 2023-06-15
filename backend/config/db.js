import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.set('strictQuery',false);
    mongoose.connect('mongodb+srv://abyantahta:t0ulA8ISgio4Ga6d@cluster0.za2wrxy.mongodb.net/?retryWrites=true&w=majority'),{
        useNewUrlParser :true,
        useUnifiedTopology: true
    }
    const db = mongoose.connection;
    db.on('error', (error)=> console.log(error));
    db.once('open', ()=> console.log('Database connected'))
};

export default connectDB;
