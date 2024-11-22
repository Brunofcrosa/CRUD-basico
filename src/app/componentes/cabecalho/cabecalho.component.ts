import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService} from "../../app-core/servicos/autenticacao.service";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router,private autenticacaoService: AutenticacaoService) {}

  ngOnInit() {
    // Inscreva-se no estado de login
    this.autenticacaoService.isLoggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }
}
