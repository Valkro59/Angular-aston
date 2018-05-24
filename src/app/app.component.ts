import { Component } from '@angular/core'; // On importe le décorateur Component
import { Hello } from './app.hello.interface'
import { Recorder } from './app.recorder'
import { File } from './app.file.recorder'
import { DB } from './app.db.recorder'
 
@Component({ // c'est ici aussi un décorateur
  selector: 'app-root', // les [] permettent de transformer en attribut
  templateUrl: './app.component.html', // On charge ici des templates (exemples), on renvoie vers le HTML
  styleUrls: ['./app.component.css']
})

export class AppComponent implements Hello { // On implémente ici le contrat Hello défini dans le fichier correspondant
  title: string; // On définit la variable title
  name = 'Aston'; // On rajoute une propriété
  rec: Recorder; // Implémentation de l'interface 'Recorder'


  constructor() { // Voir ici les cycles de vie d'Angular, constructor en est la première étape, on peut intervenir directement dans le cycle avec les bonnes commandes
    this.title = 'App';
    console.log('Construct');

    // this.rec = new File(); // Fonctionne ici car File implémente le fichier Recorder c'est donc aussi un recorder
    this.rec = new DB();
  }

  getText(event) { 
    this.rec.save(event);
  }

  sayHello() {
    return 'Hello ' + this.name; //le this fait référence à la classe,
  }

}
