import { Component } from '@angular/core';
import { Ticket } from '../../app-core/model/ticket.model';
import { TicketService } from '../../app-core/servicos/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent {
  tickets: Ticket[] = [];
  newTicket: Omit<Ticket, 'id'> = { title: '', description: '' };
  editTicket: Ticket | null = null;

  constructor(private ticketService: TicketService) {
    this.refreshTickets();
  }

  refreshTickets(): void {
    this.tickets = this.ticketService.getTickets();
  }

  addTicket(): void {
    this.ticketService.addTicket(this.newTicket);
    this.newTicket = { title: '', description: '' };
    this.refreshTickets();
  }

  startEdit(ticket: Ticket): void {
    this.editTicket = { ...ticket };
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
