import app from './app';
import connectDB from './db/connection';
import dotenv from 'dotenv';

dotenv.config();

// Validated the connection with AtlasDB
const startAtlas = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log('****ATLAS WAS STARTED****')
    } catch (error) {
        console.log(error)
    }
}


app.listen(process.env.PORT, () => {
    console.log(`PLAY AT: ${process.env.PORT}`)
})


startAtlas();
