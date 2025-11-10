import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ClothingEntity } from './clothing.entity';

@Entity('size')
export class SizeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 15 })
  size: string;
  @OneToMany(() => ClothingEntity, (clothing) => clothing.size)
  clothings: ClothingEntity[];
}
