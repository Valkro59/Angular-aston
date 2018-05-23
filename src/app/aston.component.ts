import {Component} from '@angular/core';


// data-binding

/**
 * 
 * {{}} String Interpolation, on donne toujours une expression entre {{}} qui renvoie une chaine de caractères, un objet ne fonctionnera pas
 * [] Property Binding
 * () Event Binding
 * [()] Two Way Data Binding
 */

// @Component ({
//     selector: 'app-aston', // 'nom du module'-'nom du composant'
//     template: `<h1 [style.color]=" surname === 'Mon prénom' ? 'red' : 'blue' ">Aston Component {{ surname }}</h1>` // les `....` viennent de altGr + 7, ils permmettent d'intégrer directement un code HTML, utile pour un petit code
// }) // Attention à rajouter les côtes '' dans la property binding [style.color] est similaire ici à un attribut
// export class AstonComponent {
// surname = 'Mon prénom';
// }

@Component({
    selector: 'app-aston',
    template: `
    <h1 [draggable]="true" [style.color]="'rebeccapurple'">
        Aston {{ name }} Component
    </h1>
    <input type="text" [(ngModel)]="name"/>
    <button class="btn-default btn-sm"[disabled]="name === '' ? true : false ">Hello</button>
    
    <button class="btn-default btn-sm"(click)="counter = counter + 1">+</button> {{ counter }}
    <button class="btn-default btn-sm"(click)="decrease()">-</button>`
})

export class AstonComponent{
    counter:number = 0;
    name:string = '';

    decrease() {
        this.counter--;
    }
}