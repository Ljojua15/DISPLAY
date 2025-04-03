import {Component, inject} from '@angular/core';
import {FlexService} from '@/app/lib/services/flex.service';

@Component({
  selector: 'display-levels',
  imports: [],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.scss'
})
export class LevelsComponent {
  public flexService = inject(FlexService)



}
