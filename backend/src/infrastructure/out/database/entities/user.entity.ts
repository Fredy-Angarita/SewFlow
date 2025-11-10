import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEntity } from './role.entity';
@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userID: string;
  @Column({ type: 'varchar', length: 30, unique: true })
  username: string;
  @Column({ type: 'varchar', unique: true })
  email: string;
  @Column({ type: 'char', length: 60 })
  password: string;
  @ManyToOne(() => RoleEntity, (role) => role.user)
  role: RoleEntity;
}
