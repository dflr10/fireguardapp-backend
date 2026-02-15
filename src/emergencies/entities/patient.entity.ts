import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Emergency } from './emergency.entity';

@Entity()
export class PatientReport {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  document: string;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  companion: string;

  @Column('text', { array: true, nullable: true })
  injuries: string[];

  @Column({ nullable: true })
  glasgowEye: number;

  @Column({ nullable: true })
  glasgowVerbal: number;

  @Column({ nullable: true })
  glasgowMotor: number;

  @Column('text', { array: true, nullable: true })
  procedures: string[];

  @Column('text', { nullable: true })
  notes: string;

  @Column({ nullable: true })
  transferredTo: string;

  @Column({ nullable: true })
  status: string;

  @ManyToOne(() => Emergency, e => e.patients)
  emergency: Emergency;
}
