import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Emergency } from './emergency.entity';

@Entity()
export class AdditionalData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  victimName: string;

  @Column({ nullable: true })
  idNumber: string;

  @Column({ nullable: true })
  vehiclePlate: string;

  @Column('text', { nullable: true })
  fireNotes: string;

  @Column('text', { nullable: true })
  development: string;

  @OneToOne(() => Emergency, e => e.additional)
  emergency: Emergency;
}
