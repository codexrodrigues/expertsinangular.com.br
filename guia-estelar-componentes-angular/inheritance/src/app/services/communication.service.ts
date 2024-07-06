import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  enviarMensagem(mensagem: string) {
    console.log('Communication Service:', mensagem);
  }
}
