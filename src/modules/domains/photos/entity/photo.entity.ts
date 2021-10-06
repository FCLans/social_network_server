import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

export interface IPhotoEntity {
  id?: number
  small: string
  large: string
}

@Entity('photos')
export class Photo {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'text',
    nullable: true
  })
  small: string

  @Column({
    type: 'text',
    nullable: true
  })
  large: string
}