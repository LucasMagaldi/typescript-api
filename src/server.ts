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
        log.info('****===========================================****')
    } catch (error) {
        log.error(`Atlas Error on CONNECTION: ${error}`)
    }
}


app.listen(process.env.PORT, () => {
    log.info(`PLAY AT: ${process.env.PORT}`);
    startAtlas();
})

