import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { ClothingEntity } from './clothing.entity';
import { SubmissionEntity } from './submission.entity';

@Entity('assignment')
export class AssignmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'int2' })
  quantity: number;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
  @Column({ type: 'boolean', default: false })
  closed: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @ManyToOne(() => UserEntity, (user) => user.assignments)
  user: UserEntity;
  @ManyToOne(() => ClothingEntity, (clothing) => clothing.assignments)
  clothing: ClothingEntity;
  @OneToMany(() => SubmissionEntity, (submission) => submission.assignment)
  submissions: SubmissionEntity[];
}
