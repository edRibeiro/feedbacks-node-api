import express from 'express';
import cors from 'cors';
import * as database from '../config/database';
import routes from './routes';
const configureExpress = async () => {
  const app: express.Application = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use('/api/v1/', routes);

  return app;
};

export default () => database.connect().then(configureExpress);