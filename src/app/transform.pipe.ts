import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {

  transform(value: string, length: number, endChar= '..'): string {
     return (value.length <= length) ? value : value.substr(0, length - endChar.length) + endChar;
   }

}
