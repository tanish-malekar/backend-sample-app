import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import routes from './routes';
import logger from './util/logger';

async function main() {
    dotenv.config();
    const app = express();
    app.use(express.json());
    app.use(morgan('dev'));

    const { PORT } = process.env;

    app.use(routes);

    app.listen(PORT, () => {
        logger.info(`Express server listening on port ${PORT}`);
    });
}

main();
