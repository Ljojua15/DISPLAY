import { Component } from '@angular/core';
import {TaskComponent} from "@/app/comp-shared/task/task.component";

@Component({
  selector: 'display-mtsvadi-grid',
    imports: [
        TaskComponent
    ],
  templateUrl: './mtsvadi-grid.component.html',
  styleUrl: './mtsvadi-grid.component.scss'
})
export class MtsvadiGridComponent {

}
