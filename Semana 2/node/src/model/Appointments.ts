import { startOfHour, parseISO } from "date-fns";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

// A model é responsavel pela estrutura do dado que a aplicacao utiliza
@Entity("appointments")
class Appointments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;

  // Com o typeorm nao é necessario criar um construtor, porem para parar de dar erro é necessario desabilitar no tsconfig a propriedade strictPropertyInitialization
}

export function getParsedHour(date: string) {
  return startOfHour(parseISO(date));
}

export default Appointments;
