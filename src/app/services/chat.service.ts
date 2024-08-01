// chat.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  sendMessage(groupName: string, message: string) {
    // Aquí iría la lógica para enviar el mensaje al servidor.
    console.log(`Mensaje enviado a ${groupName}: ${message}`);
  }

  receiveMessages(groupName: string) {
    // Aquí iría la lógica para recibir mensajes del servidor.
  }
}

