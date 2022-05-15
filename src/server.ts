import app from './app';
import connectDB from './db/connection';
import log from './logger';
import dotenv from 'dotenv';

dotenv.config();

// Validated the connection with AtlasDB
const startAtlas = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        log.info('****ATLAS WAS STARTED****')
    } catch (error) {
        log.error(error)
    }
}


app.listen(process.env.PORT, () => {
    log.info(`PLAY AT: ${process.env.PORT}`);
    startAtlas();
})

