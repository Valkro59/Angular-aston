import { Component } from '@angular/core'; // On importe le décorateur Component

@Component({ // c'est ici aussi un décorateur
  selector: 'app-root', // les [] permettent de transformer en attribut
  templateUrl: './app.component.html', // On charge ici des templates (exemples), on renvoie vers le HTML
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'; // On définit la variable title
  name = 'Aston'; // On rajoute une propriété

  sayHello() {
    return 'Hello ' + this.name; //le this fait référence à la classe,
  }

}
