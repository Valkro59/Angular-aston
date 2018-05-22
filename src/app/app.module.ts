import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // On importe le module forms qui gère les formulaires
import { AppComponent } from './app.component';
import { AstonComponent} from './aston.component'; //On importe le composant puis on déclare

@NgModule({ // ici un décorateur ( @blabla ), il se met au-dessus d'une classe, il rajoute des responsabilités (le comportement que la classe devrait avoir)
  // c'est un objet qui inclut dans les {}, qui fonctionne avec key : value
  declarations: [
    AppComponent,
    AstonComponent // on déclare ici
  ],
  imports: [
    BrowserModule,
    FormsModule // On déclare le module Forms dans le module principal
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
