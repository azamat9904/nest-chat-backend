import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ length: 255, nullable: false })
  lastname: string;

  @Column({ length: 255, nullable: false })
  name: string;

  @Column()
  mobilePhone: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  lastSeen: Date;

  @Column()
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
