import { Component, Input } from '@angular/core';
import { IUsuario } from '../../../../Interfaces/Usuario.interface';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-lista-de-usuarios',
  standalone: true,
  imports: [MatTableModule, 
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './lista-de-usuarios.component.html',
  styleUrl: './lista-de-usuarios.component.css'
})
export class ListaDeUsuariosComponent {

  displayedColumns: string[] = ['id','login', 'nome', 'perfil','acoes'];


  @Input() usersList: IUsuario[] = [];

}
