import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaInicialComponent} from "./componentes/pagina-inicial/pagina-inicial.component";
import {LoginComponent} from "./componentes/login/login.component";
import { SobreOJogoComponent } from './componentes/sobre-o-jogo/sobre-o-jogo.component';
import { AtualizacoesComponent } from './componentes/atualizacoes/atualizacoes.component';
import { SuporteComponent } from './componentes/suporte/suporte.component';
import { PainelDoJogadorComponent } from './componentes/painel-do-jogador/painel-do-jogador.component'
import { TicketComponent } from './componentes/ticket/ticket.component'

const routes: Routes = [
  { path: "", redirectTo: "pagina-inicial", pathMatch: "full" },
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "login", component: LoginComponent },
  { path: "sobre-o-jogo", component: SobreOJogoComponent },
  { path: "atualizacoes", component: AtualizacoesComponent },
  { path: "suporte", component: SuporteComponent },
  { path: "painel-do-jogador", component: PainelDoJogadorComponent },
  { path: "ticket", component: TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
