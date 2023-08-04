import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {animate, AnimationBuilder, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-bb-pl-chatbot',
  templateUrl: './bb-pl-chatbot.component.html',
  styleUrls: ['./bb-pl-chatbot.component.scss']
})
export class BbPlChatbotComponent {
  isChatOpen = false;
  //Declaracion de un reactive form
  form = new FormGroup({
    mensaje: new FormControl<string>('', [Validators.required]),
  });

  //Declaracion de un array para controlar los mensajes
  messages: Message[] = [
    {content: 'Hola, ¿cómo estás?', isUserMessage: true},
    {content: '¡Hola! Soy el chatbot verción 3.', isUserMessage: false},
    // Agrega más mensajes aquí...
  ];
  animationBuilder: AnimationBuilder;
  constructor(private _animationBuilder: AnimationBuilder) {
    this.animationBuilder = _animationBuilder;
  }

  toggleChat(): void {
    if (this.isChatOpen) {
      this.hideChat();
    } else {
      this.showChat();
    }
  }

  //futura funcion para controlar desplazamiento del icono
  onMessageDropped(event: CdkDragDrop<Message[]>): void {
    moveItemInArray(this.messages, event.previousIndex, event.currentIndex);
  }

  //Funcion para enviar el mensaje de manera local
  sendMesage() {
    this.messages.push({content: this.mensaje.value, isUserMessage: true});
    this.mensaje.setValue('');
  }

  showChat(): void {
    this.isChatOpen = true;
    // const factory = this.animationBuilder.build([
    //   style({ transform: 'translateY(-100%)', opacity: 0 }),
    //   animate('0.3s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })),
    // ]);
    // const player = factory.create(document.querySelector('.chat-container'));
    // player.play();
  }

  hideChat(): void {
    this.isChatOpen = false;
    // const factory = this.animationBuilder.build([
    //   animate('0.3s ease-in-out', style({ transform: 'translateY(-100%)', opacity: 0 })),
    // ]);
    // const player = factory.create(document.querySelector('.chat-container'));
    // player.play();
  }

  //Control de formulario
  get mensaje(): FormControl {
    return this.form.get('mensaje') as FormControl;
  }
}

//Tipado de mensaje, content apra controlar el contenido de los mensajes
//isUserMessage apra controlar si es un mensaje de usuario y controlar la logica de los mensajes
interface Message {
  content: string;
  isUserMessage: boolean;
}
