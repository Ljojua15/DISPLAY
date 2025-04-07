import { Component } from '@angular/core';
import {TaskComponent} from '../../comp-shared/task/task.component';
import {ResultComponent} from '@/app/comp-shared/result/result.component';

@Component({
  selector: 'display-khinkali-flex',
  imports: [
    TaskComponent,
    ResultComponent
  ],
  templateUrl: './khinkali-flex.component.html',
  styleUrl: './khinkali-flex.component.scss'
})
export class KhinkaliFlexComponent {

}
