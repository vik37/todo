import {Status} from 'src/app/shared/enums/status.enum';
export interface Todo{
  id:number,
  name:string,
  date:string,
  status:Status
}
