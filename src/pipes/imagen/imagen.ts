import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  

  transform(codigo: string) {
    return 'http://178.128.67.94/images/' + codigo +'.jpg';
  }
}
