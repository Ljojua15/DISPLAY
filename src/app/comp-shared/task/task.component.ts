import { Component } from '@angular/core';
import {LevelsComponent} from './levels/levels.component';
import {ExampleComponent} from './example/example.component';
import {CoddingComponent} from './codding/codding.component';

@Component({
  selector: 'display-task',
  imports: [
    LevelsComponent,
    ExampleComponent,
    CoddingComponent
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

}
