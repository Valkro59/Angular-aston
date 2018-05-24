import { Component, Input, Output, EventEmitter } from '@angular/core'; // On importe les décorateurs à utiliser ensuite


@Component({ // Décorateur
    selector: 'message-aston',
    template: `<textarea placeholder="Saisissez votre texte" 
                        [(ngModel)]= "Blabla" 
                        [maxlength]="limit" 
                        [style.color]="Blabla.length < limit-10 ? 'black' : 'red' ">
                </textarea> 
                <button (click)="sendMessage()" class="btn btn-success">Send</button>
                <p>Nombre de Caractères = {{ Blabla.length }}</p>
                <p>Limité à {{ limit }} caractères</p>`,
    // Permet en dessous de définir des styles
    styles: [`  
        textarea {
            width: 50%;
        }
    `]
    // styleUrls: ['./fichier1.css','./fichier2.css' ],  Autre méthode pour définir des styles
})

export class MessageComponent {
    
    @Input() Blabla: string = ''; // On déclare les décorateurs, Attention à respecter les majuscules et minuscules, ici on souhaite injecter directement un texte dans le message
    @Input() limit: number = 50; // Ici on souhaite définir une limite en tant que paramètre pour chaque message
    @Output() response = new EventEmitter; // 'Emit' pour émettre, 

    sendMessage(){ // sendMessage qui est fonction du message pour envoyer le texte 
        this.response.emit(this.Blabla);
    }
}

