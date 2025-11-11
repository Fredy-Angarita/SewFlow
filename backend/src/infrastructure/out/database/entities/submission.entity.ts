import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AssignmentEntity } from './assignment.entity';
@Entity('submission')
export class SubmissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'int2' })
  quantity: number;
  @Column({ type: 'boolean', default: false })
  paid: boolean;
  @CreateDateColumn()
  createdAt: Date;
  @ManyToOne(() => AssignmentEntity, (assignment) => assignment.submissions)
  assignment: AssignmentEntity;
}
