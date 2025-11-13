import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from './entities/role.entity';
import { SizeEntity } from './entities/size.entity';
import { ClothingEntity } from './entities/clothing.entity';
import { AssignmentEntity } from './entities/assignment.entity';
import { SubmissionEntity } from './entities/submission.entity';
import { PaymentEntity } from './entities/payment.entity';
import { HistoryPaymentEntity } from './entities/history.payment.entity';
import { UserRepository } from './repository/user.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(DataSourceConfig),
    TypeOrmModule.forFeature([
      UserEntity,
      RoleEntity,
      SizeEntity,
      ClothingEntity,
      AssignmentEntity,
      SubmissionEntity,
      HistoryPaymentEntity,
      PaymentEntity,
    ]),
  ],
  providers: [UserRepository],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
