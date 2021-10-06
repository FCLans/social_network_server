import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export interface IContactEntity {
  vk: string
  facebook: string
  instagram: string
  github: string
}

@Entity('contacts')
export class Contact implements IContactEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'text',
    nullable: true
  })
  vk: string

  @Column({
    type: 'text',
    nullable: true
  })
  facebook: string

  @Column({
    type: 'text',
    nullable: true
  })
  instagram: string

  @Column({
    type: 'text',
    nullable: true
  })
  github: string
}