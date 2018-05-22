import {Component} from '@angular/core';


// data-binding

/**
 * 
 * {{}} String Interpolation, on donne toujours une expression entre {{}} qui renvoie une chaine de caractères, un objet ne fonctionnera pas
 * [] Property Binding
 */

@Component ({
    selector: 'app-aston', // 'nom du module'-'nom du composant'
    template: `<h1 [style.color]=" surname === 'Mon prénom' ? 'red' : 'blue' ">Aston Component {{ surname }}</h1>` // les `....` viennent de altGr + 7, ils permmettent d'intégrer directement un code HTML, utile pour un petit code
}) // Attention à rajouter les côtes '' dans la property binding [style.color] est similaire ici à un attribut
export class AstonComponent {
surname = 'Mon prénom';
}