import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../Interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private readonly http: HttpClient) { }

   private url = 'https://roomflow-api.tccnapratica.com.br/usuario';

  getUsers() : Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.url + '/listar');
  }

  getUsersApproved() : Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.url + '/listar-ativos');
  }

  removerUsuario(id: number) : Observable<IUsuario> {
    return this.http.delete<IUsuario>(this.url + '/remover/' + id);
  }
  criarUsuario(usuario: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.url + '/cadastrar', usuario);
  }
  
  aprovarUsuario(id: number): Observable<any> {
    return this.http.put(this.url + '/aprovar/' + id, {});
  }
  
  rejeitarUsuario(id: number): Observable<any> {
    return this.http.put(this.url + '/rejeitar/' + id, {});
  }

}
