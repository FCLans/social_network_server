import { IPhotoEntity, Photo } from './photo.entity'
import { Contact, IContactEntity } from './contact.entity'
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

export interface IUserEntity {
  id: number
  fullName: string
  status?: string
  lookingForAJob?: boolean
  contacts: IContactEntity
  photos: IPhotoEntity
}

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false
  })
  fullName: string

  @Column({
    type: 'varchar',
    length: 100,
    default: '',
    nullable: true
  })
  status: string

  @Column({
    type: 'boolean',
    default: false,
    nullable: true
  })
  lookingForAJob: boolean

  @OneToOne(() => Photo)
  @JoinColumn()
  photos: Photo

  @OneToOne(() => Contact)
  @JoinColumn()
  contacts: Contact
}
