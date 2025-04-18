import { Routes } from '@angular/router';
import { InicialComponent } from './components/pages/inicial/inicial.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PrincipalComponent } from './components/pages/principal/principal.component';
import { EsqueciASenhaComponent } from './components/pages/esqueci-a-senha/esqueci-a-senha.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { GerenciamentoComponent } from './components/pages/gerenciamento/gerenciamento.component';
import { AlterarSenhaComponent } from './components/pages/alterar-senha/alterar-senha.component';
import { AlterarMapaComponent } from './components/pages/alterar-mapa/alterar-mapa.component';

export const routes: Routes = [

    { path: '', component: InicialComponent },
    { path: 'login', component: LoginComponent },
    { path: 'principal', component: PrincipalComponent },
    { path: 'esqueci', component: EsqueciASenhaComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'gerenciamentoUsuarios', component: GerenciamentoComponent},
    { path: 'alterar-senha', component: AlterarSenhaComponent},
    { path: 'alterar-mapa' , component: AlterarMapaComponent},
  
];
