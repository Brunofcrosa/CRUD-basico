import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../app-core/model/ticket.model';
import { TicketService } from '../../app-core/servicos/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-do-jogador',
  templateUrl: './painel-do-jogador.component.html',
  styleUrls: ['./painel-do-jogador.component.css'],
})
export class PainelDoJogadorComponent implements OnInit {
  isLoggedIn: boolean = false;
  tickets: Ticket[] = [];
  editTicket: Ticket | null = null;

  private currentProtocol: number;
  private maxProtocol: number;

  constructor(private ticketService: TicketService, private router: Router) {
    const maxDigitos = 4;
    const minProtocol = Math.pow(10, maxDigitos - 1); //
    this.maxProtocol = Math.pow(10, maxDigitos) - 1; //
    this.currentProtocol = minProtocol - 1; //
  }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!this.isLoggedIn) {
      this.router.navigate(['/pagina-inicio']);
    } else {
      this.refreshTickets();
    }
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/pagina-inicio']);
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

  generateProtocolNumber(): number {
    if (this.currentProtocol >= this.maxProtocol) {
      throw new Error('Todos os números possíveis foram gerados.');
    }
    this.currentProtocol++;
    return this.currentProtocol;
  }
  createTicket(): void {
    const newTicket: Ticket = {
      id: this.generateProtocolNumber(),
      title: 'Assunto',
      description: '',
    };
    this.ticketService.addTicket(newTicket);
    this.refreshTickets();
  }
}


