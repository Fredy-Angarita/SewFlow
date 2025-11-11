import path from 'path';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/browser';
import { RoleEntity } from '../entities/role.entity';
import { UserEntity } from '../entities/user.entity';
import { SizeEntity } from '../entities/size.entity';
import { ClothingEntity } from '../entities/clothing.entity';
import { AssignmentEntity } from '../entities/assignment.entity';
import { SubmissionEntity } from '../entities/submission.entity';
import { HistoryPaymentEntity } from '../entities/history.payment.entity';
import { PaymentEntity } from '../entities/payment.entity';
dotenv.config();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!, 10),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  logging: false,
  entities: [
    RoleEntity,
    UserEntity,
    SizeEntity,
    ClothingEntity,
    AssignmentEntity,
    SubmissionEntity,
    HistoryPaymentEntity,
    PaymentEntity,
  ],
  migrations: [path.join(__dirname, '../migrations/*.{js,ts}')],
};

export const dataSourceInstance = new DataSource(DataSourceConfig);
