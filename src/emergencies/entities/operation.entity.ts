import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Emergency } from './emergency.entity';

@Entity()
export class Operation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  commander: string;

  @Column({ nullable: true })
  driver: string;

  @Column('text', { array: true, nullable: true })
  assistants: string[];

  @Column({ nullable: true })
  vehicle: string;

  @Column({ type: 'timestamp', nullable: true })
  departureTime: string;

  @Column({ type: 'timestamp', nullable: true })
  arrivalTime: string;

  @Column({ nullable: true })
  units: number;

  @Column({ nullable: true })
  kmStart: number;

  @Column({ nullable: true })
  kmEnd: number;

  @ManyToOne(() => Emergency, (e) => e.operations)
  emergency: Emergency;
}
