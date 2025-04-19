import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'perfil'
})
export class PerfilPipe implements PipeTransform {

  transform(perfil: number): string {
    
    if (perfil === 1) {
      return 'Administrador';
    } else if (perfil === 2) {
      return 'Professor';
    } else {
      return 'Perfil inválido';
    }
  }

}
