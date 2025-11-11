import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoleEntity } from './role.entity';
import { AssignmentEntity } from './assignment.entity';
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
  @OneToMany(() => AssignmentEntity, (assignment) => assignment.user)
  assignments: AssignmentEntity[];
}
