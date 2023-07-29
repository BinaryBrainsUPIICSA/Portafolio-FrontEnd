import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-bb-pl-chatbot',
  templateUrl: './bb-pl-chatbot.component.html',
  styleUrls: ['./bb-pl-chatbot.component.scss']
})
export class BbPlChatbotComponent {
  messages: Message[] = [
    { content: 'Hola, ¿cómo estás?', isUserMessage: true },
    { content: '¡Hola! Soy el chatbot verción 3.', isUserMessage: false },
    // Agrega más mensajes aquí...
  ];

  isChatOpen = false;

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
    console.log('isChatOpen:', this.isChatOpen);
  }

  onMessageDropped(event: CdkDragDrop<Message[]>): void {
    moveItemInArray(this.messages, event.previousIndex, event.currentIndex);
  }
}

interface Message {
  content: string;
  isUserMessage: boolean;
}
