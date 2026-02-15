import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Operation } from './operation.entity';
import { AdditionalData } from './additional.entity';
import { Closure } from './closure.entity';
import { Impact } from './impact.entity';
import { PatientReport } from './patient.entity';

@Entity()
export class Emergency {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  departmentId: string;

  @Column()
  municipalityId: string;

  @Column()
  stationId: string;

  @Column()
  type: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 9, scale: 6 })
  lat: number;

  @Column('decimal', { precision: 9, scale: 6 })
  lng: number;

  @Column()
  status: string;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: true })
  synced: boolean;

  @Column({ default: false })
  deleted: boolean;

  @OneToMany(() => Operation, (o) => o.emergency, { cascade: true, eager: true })
  operations: Operation[];

  @OneToOne(() => Impact, { cascade: true, eager: true })
  @JoinColumn()
  impact: Impact;

  @OneToOne(() => AdditionalData, { cascade: true, eager: true })
  @JoinColumn()
  additional: AdditionalData;

  @OneToOne(() => Closure, { cascade: true, eager: true })
  @JoinColumn()
  closure: Closure;

  @OneToMany(() => PatientReport, (p) => p.emergency, {
    cascade: true,
    eager: true,
  })
  patients: PatientReport[];
}
