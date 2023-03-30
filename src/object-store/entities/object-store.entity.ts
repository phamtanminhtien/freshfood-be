import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ObjectStore {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hash: string;

  @Column({
    type: 'longtext',
  })
  data: string;
}
