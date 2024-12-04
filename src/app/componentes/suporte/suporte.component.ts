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

  constructor(private ticketService: TicketService) {}


  onSubmit() {
    if (this.ticket.assunto && this.ticket.descricao) {
      this.ticketService.addTicket({
        title: this.ticket.assunto,
        description: this.ticket.descricao
      });
      this.showSuccessMessage = true;
      this.ticket = { assunto: '', descricao: '' };
    }
  }
}
