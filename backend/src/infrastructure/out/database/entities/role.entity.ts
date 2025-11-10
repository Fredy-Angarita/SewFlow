import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 20, unique: true })
  name: string;
  @OneToMany(() => UserEntity, (user) => user.roleID)
  user: UserEntity[];
}
