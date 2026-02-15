import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Emergency } from './emergency.entity';

@Entity()
export class Closure {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  distance: number;

  @Column({ nullable: true })
  finalKm: number;

  @Column({ default: false })
  cleaning: boolean;

  @Column({ default: false })
  organization: boolean;

  @Column({ nullable: true })
  heas: string;

  @Column('text', { nullable: true })
  observations: string;

  @Column('jsonb', { nullable: true })
  expenses: any;

  @Column('text', { nullable: true })
  incidents: string;

  @OneToOne(() => Emergency, e => e.closure)
  emergency: Emergency;
}
