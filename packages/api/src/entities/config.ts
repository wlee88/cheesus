import { DataSource, DataSourceOptions, SimpleConsoleLogger } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { getPostgresConnectionOptions } from '../modules/database/database.module';

const configService = new ConfigService(process.env)

export default new DataSource({
    ...(getPostgresConnectionOptions(configService) as DataSourceOptions),
    logger: new SimpleConsoleLogger(),
})