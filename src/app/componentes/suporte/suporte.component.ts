import {Component} from '@angular/core';
import {Ticket} from "../../app-core/model/ticket.model";
import {TicketService} from "../../app-core/servicos/ticket.service";

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent {
  ticket = {
    assunto: '',
    descricao: '',
  };

  showSuccessMessage: boolean = false;
  tickets: Ticket[] = [];
  newTicket: Omit<Ticket, 'id'> = {title: '', description: ''};

  constructor(private ticketService: TicketService) {
    this.refreshTickets();
  }

  helpOptions = [
    {title: 'Ajuda 1', route: '/ajuda1'},
    {title: 'Ajuda 2', route: '/ajuda2'},
    {title: 'Ajuda 3', route: '/ajuda3'}
  ];

  onSubmit() {
    console.log('Ticket Enviado:', this.ticket);
    this.ticketService.addTicket({
      title: this.ticket.assunto,
      description: this.ticket.descricao,
    });
    this.showSuccessMessage = true;
    this.ticket = {assunto: '', descricao: ''};
    this.refreshTickets();
  }

  refreshTickets(): void {
    this.tickets = this.ticketService.getTickets();
  }

  addTicket(): void {
    this.ticketService.addTicket(this.newTicket);
    this.newTicket = {title: '', description: ''};
    this.refreshTickets();
  }
}
