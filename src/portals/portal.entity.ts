import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('portals')
export class Portal {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 191, nullable: false, comment: 'nombre' })
  name: string;

  @Column({
    type: 'varchar',
    length: 191,
    nullable: true,
    default: null,
    comment: 'Url externa para traer los productos.',
  })
  product_url: string | null;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  load_products: number;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  custom_fields: number;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  stock: number;

  @Column({ type: 'text', nullable: true, comment: 'Url del header' })
  header_url: string | null;

  @Column({ type: 'text', nullable: true, comment: 'Token externo' })
  token_external: string | null;

  @Column({
    type: 'varchar',
    length: 191,
    nullable: true,
    default: null,
    comment: 'url caso siab',
  })
  nro_convenio_siab: string | null;

  @Column({ type: 'text', nullable: true, comment: 'Email Confirmacion' })
  emails_confirmation: string | null;

  @Column({ type: 'text', nullable: true, comment: 'Url Gateway' })
  gateway_url: string | null;

  @Column({ type: 'text', nullable: true, comment: 'Url Gateway status' })
  gateway_status_url: string | null;

  @Column({ type: 'text', nullable: true, comment: 'Usuario Gateway' })
  gateway_user: string | null;

  @Column({ type: 'text', nullable: true, comment: 'Contraseña Gateway' })
  gateway_password: string | null;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @Column({ type: 'tinyint', nullable: false })
  is_fields_siab: number;

  @Column({
    type: 'varchar',
    length: 191,
    nullable: true,
    default: null,
    comment: 'url del servicio externo',
  })
  url_external_response: string | null;

  @Column({
    type: 'varchar',
    length: 191,
    nullable: true,
    default: null,
    comment: 'Url css',
  })
  css_file: string | null;

  @Column({ type: 'tinyint', nullable: false, default: 0 })
  to_complete_user: number;

  @Column({
    type: 'varchar',
    length: 191,
    nullable: true,
    default: null,
    comment: 'Url externa para responder productos eliminados.',
  })
  payment_expiration_url: string | null;

  @Column({
    type: 'int',
    nullable: true,
    default: null,
    comment: 'Hora de expiracion pago.',
  })
  payment_expiration_hour: number | null;

  @Column({
    type: 'varchar',
    length: 191,
    nullable: true,
    default: null,
    comment: 'Texto de expiracion.',
  })
  payment_expiration_desc: string | null;

  @Column({ type: 'varchar', length: 191, nullable: true, default: null })
  email_encryption: string | null;

  @Column({ type: 'varchar', length: 191, nullable: true, default: null })
  email_password: string | null;

  @Column({ type: 'int', nullable: true, default: null })
  email_port: number | null;

  @Column({ type: 'varchar', length: 191, nullable: true, default: null })
  email_sender: string | null;

  @Column({ type: 'varchar', length: 191, nullable: true, default: null })
  email_host: string | null;

  @Column({ type: 'varchar', length: 191, nullable: true, default: null })
  email_user: string | null;

  @Column({
    type: 'datetime',
    nullable: true,
    comment: 'Fecha inicio de pago para ejecutar el cron de reintento',
  })
  date_start_cron_paid: Date | null;

  @Column({
    type: 'text',
    nullable: true,
    comment: 'url del servicio  externo',
  })
  url_logo: string | null;
}
