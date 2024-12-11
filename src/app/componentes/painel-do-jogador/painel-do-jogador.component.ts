import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../app-core/model/ticket.model';
import { TicketService } from '../../app-core/servicos/ticket.service';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../app-core/servicos/autenticacao.service';

@Component({
  selector: 'app-painel-do-jogador',
  templateUrl: './painel-do-jogador.component.html',
  styleUrls: ['./painel-do-jogador.component.css'],
})
export class PainelDoJogadorComponent implements OnInit {
  isLoggedIn: boolean = false;
  tickets: Ticket[] = [];
  editTicket: Ticket | null = null;

  constructor(private ticketService: TicketService, private router: Router, private authService: AutenticacaoService) {}

  ngOnInit() {
      this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
      this.refreshTickets();
  }

  logout() {
    this.authService.logout();
  }

  refreshTickets(): void {
    this.tickets = this.ticketService.getTickets();
  }

  startEdit(ticket: Ticket): void {
    this.editTicket = {...ticket}; //
  }

  saveEdit(): void {
    if (this.editTicket) {
      this.ticketService.updateTicket(this.editTicket);
      this.editTicket = null;
      this.refreshTickets();
    }
  }

  deleteTicket(id: number): void {
    this.ticketService.deleteTicket(id);
    this.refreshTickets();
  }
}


