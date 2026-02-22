import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Emergency } from './emergency.entity';

@Entity()
export class Impact {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 0 })
  deaths: number;

  @Column({ default: 0 })
  injured: number;

  @Column({ default: 0 })
  missing: number;

  @Column({ default: 0 })
  affectedPersons: number;

  @Column({ default: 0 })
  affectedFamilies: number;

  @Column({ default: 0 })
  affectedHouses: number;

  @Column({ default: 0 })
  affectedHousesDestroyed: number;

  @Column({ nullable: true })
  area: string;

  @OneToOne(() => Emergency, e => e.impact)
  emergency: Emergency;
}
