import express from 'express';
import dotenv from 'dotenv';
import logger from './util/logger';

async function main() {
    dotenv.config();
    const app = express();
    const { PORT } = process.env;

    app.listen(PORT, () => {
        logger.info(`Express server listening on port ${PORT}`);
    });
}

main();
