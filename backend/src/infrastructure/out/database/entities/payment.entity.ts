import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { HistoryPaymentEntity } from './history.payment.entity';
@Entity('payment')
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;
  @CreateDateColumn()
  paidAt: Date;
  @OneToMany(() => HistoryPaymentEntity, (history) => history.payments)
  historyPayments: HistoryPaymentEntity[];
}
