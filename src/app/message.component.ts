import {Component} from '@angular/core';

@Component ({ // Décorateur
    selector : 'message-aston',
    template : `<textarea placeholder="Saisissez votre texte" [(ngModel)]= "Blabla" maxlength="50" [style.color]="Blabla.length < '40' ? 'black' : 'red' "></textarea> 
                <p>Nombre de Caractères = {{ Blabla.length }}</p>
                <p>Limité à 50 caractères</p>`,
    // Permet en dessous de définir des styles
    styles : [`  
        textarea {
            width: 50%;
        }
    `]
    // styleUrls: ['./fichier1.css','./fichier2.css' ],  Autre méthode pour définir des styles
})

export class MessageComponent {
    
}

