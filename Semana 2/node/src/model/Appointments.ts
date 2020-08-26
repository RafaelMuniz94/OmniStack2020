import {startOfHour,parseISO} from 'date-fns'
import { uuid } from "UuidV4";


class  Appointments {
  id: string;
  provider: string;
  date: Date;

  constructor({provider,date}:Omit<Appointments,"id">){
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
  
}

 export function getParsedHour(date:string){
  return startOfHour(parseISO(date))
}


export default Appointments