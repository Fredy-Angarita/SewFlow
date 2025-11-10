import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SizeEntity } from './size.entity';
@Entity('clothing')
export class ClothingEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 50 })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column()
  imageUrl: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  production_cost: number;
  @ManyToOne(() => SizeEntity, (size) => size.clothings)
  size: SizeEntity;
}
