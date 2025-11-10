import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './config/data.source';
import { UserEntity } from './entities/user.entity';
import { RoleEntity } from './entities/role.entity';
import { SizeEntity } from './entities/size.entity';
import { ClothingEntity } from './entities/clothing.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(DataSourceConfig),
    TypeOrmModule.forFeature([
      UserEntity,
      RoleEntity,
      SizeEntity,
      ClothingEntity,
    ]),
  ],
  providers: [],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
