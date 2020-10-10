import { startOfHour, parseISO } from "date-fns";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import User from "@users/infra/Typeorm/entities/Users";

// A model é responsavel pela estrutura do dado que a aplicacao utiliza
@Entity("appointments")
class Appointments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  provider_id: string;

  @ManyToOne(() => User) // Relacao Muitos para UM
  @JoinColumn({name: 'provider_id'}) // Relacao Muitos para UM
  provider: User;

  @Column("timestamp with time zone")
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Com o typeorm nao é necessario criar um construtor, porem para parar de dar erro é necessario desabilitar no tsconfig a propriedade strictPropertyInitialization
}

export function getParsedHour(date: string) {
  return startOfHour(parseISO(date));
}

export default Appointments;
