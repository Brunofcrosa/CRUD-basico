import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './componentes/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SobreOJogoComponent } from './componentes/sobre-o-jogo/sobre-o-jogo.component';
import { AtualizacoesComponent } from './componentes/atualizacoes/atualizacoes.component';
import { SuporteComponent } from './componentes/suporte/suporte.component';
import {NgOptimizedImage} from "@angular/common";
import { PainelDoJogadorComponent } from './componentes/painel-do-jogador/painel-do-jogador.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginaInicialComponent,
    LoginComponent,
    SobreOJogoComponent,
    AtualizacoesComponent,
    SuporteComponent,
    PainelDoJogadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
