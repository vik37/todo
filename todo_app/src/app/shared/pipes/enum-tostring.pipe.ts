import { Pipe, PipeTransform } from '@angular/core';
import {Status} from 'src/app/shared/enums/status.enum';

@Pipe({
  name: 'enumTostring'
})
export class EnumTostringPipe implements PipeTransform {

  transform(value: Status): string {
    let status: string = Status[value];
    return status;
  }

}
