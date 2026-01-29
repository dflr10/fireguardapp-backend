import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Emergency {

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column() 
  departmentId: string;

  @Column()
  municipalityId: string;

  @Column()
  stationId: string;

  @Column()
  type: string;

  @Column("text")
  description: string;

  @Column("decimal", { precision: 9, scale: 6 })
  lat: number;

  @Column("decimal", { precision: 9, scale: 6 })
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
}
