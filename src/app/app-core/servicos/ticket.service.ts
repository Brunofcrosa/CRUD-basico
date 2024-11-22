import { Injectable } from '@angular/core';
import { Ticket } from '../model/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];

  constructor() {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets) {
      this.tickets = JSON.parse(storedTickets);
    }
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  addTicket(ticket: Omit<Ticket, 'id'>): void {
    const newTicket = {
      ...ticket,
      id: this.tickets.length ? Math.max(...this.tickets.map(t => t.id)) + 1 : 1
    };
    this.tickets.push(newTicket);
    this.saveTickets();
  }

  updateTicket(updatedTicket: Ticket): void {
    const index = this.tickets.findIndex(t => t.id === updatedTicket.id);
    if (index !== -1) {
      this.tickets[index] = updatedTicket;
      this.saveTickets();
    }
  }

  deleteTicket(id: number): void {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
    this.saveTickets();
  }

  private saveTickets(): void {
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
  }
}
