import { Component } from '@angular/core';
import {TaskComponent} from "@/app/comp-shared/task/task.component";
import {ResultComponent} from "@/app/comp-shared/result/result.component";
import {TaskGridComponent} from '@/app/comp-grid/task-grid/task-grid.component';
import {ResultGridComponent} from '@/app/comp-grid/result-grid/result-grid.component';

@Component({
  selector: 'display-mtsvadi-grid',
  imports: [
    TaskGridComponent,
    ResultGridComponent
  ],
  templateUrl: './mtsvadi-grid.component.html',
  styleUrl: './mtsvadi-grid.component.scss'
})
export class MtsvadiGridComponent {

}
