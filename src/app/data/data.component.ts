import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {
  name: string = '';
  task = { text: '' };

  tasks = [ // entre [] c'est un tableau auquel on accroche une collection d'objets Task
    { title: 'Task 1', done: false },
    { title: 'Task 2', done: true },
    { title: 'Task 3', done: false }
  ]

  assTask() {
    console.log(this.task);
    this.tasks.push({
    title: this.task.text,
    done: false});
  }


  changeName(e: Event) {  // e est ici le nom de la variable, Event en est le genre 
    let a = new Number('5');
    let b = <Number>a;

    console.log(a instanceof String); // instance of permet de tester deux éléménts; a est ici l'élément à tester et String l'élément voulue
    console.log(b instanceof Number);

    let input = <HTMLInputElement>e.target;
    // On effectue un cast, un transtypage (on transforme un genre en un autre genre), afin d'accèder à l'attribut 'value' de l'objet 'event.target'
    // le e.target devient ici un élément HTML
    this.name = input.value;
  }

}
