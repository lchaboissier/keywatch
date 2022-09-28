import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value, "bold");
    return "<b>"+ value +"</b>";
  }

}
