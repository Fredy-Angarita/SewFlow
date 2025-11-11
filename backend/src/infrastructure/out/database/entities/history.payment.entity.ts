import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaymentEntity } from './payment.entity';
import { SubmissionEntity } from './submission.entity';

@Entity('history_payment')
export class HistoryPaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;
  @ManyToOne(() => PaymentEntity, (payments) => payments.historyPayments)
  payments: PaymentEntity;
  @ManyToOne(() => SubmissionEntity, (submission) => submission.historyPayments)
  submission: SubmissionEntity;
}
