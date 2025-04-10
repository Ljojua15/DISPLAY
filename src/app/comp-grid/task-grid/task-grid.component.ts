import { Component } from '@angular/core';
import {CoddingComponent} from "@/app/comp-shared/task/codding/codding.component";
import {ExampleComponent} from "@/app/comp-shared/task/example/example.component";
import {LevelsComponent} from "@/app/comp-shared/task/levels/levels.component";
import {LevelsGridComponent} from '@/app/comp-grid/task-grid/levels-grid/levels-grid.component';
import {ExampleGridComponent} from '@/app/comp-grid/task-grid/example-grid/example-grid.component';
import {CoddingGridComponent} from '@/app/comp-grid/task-grid/codding-grid/codding-grid.component';

@Component({
  selector: 'display-task-grid',
  imports: [
    LevelsGridComponent,
    ExampleGridComponent,
    CoddingGridComponent
  ],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {

}
