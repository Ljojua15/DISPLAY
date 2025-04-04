import {Component, computed, inject} from '@angular/core';
import {FlexService} from '@/app/lib/services/flex.service';

@Component({
  selector: 'display-levels',
  imports: [],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.scss'
})
export class LevelsComponent {
  public flexService = inject(FlexService)

  public $currentLevel$ = computed(()=>{
    return this.flexService.currentLevel();
  })

  public $quantityOfLessons$ = computed(()=>{
    return this.flexService.flexConfigLength;
  })

  public changeLevel(direction: 'prev' | 'next') {
    this.flexService.changeLevel(direction);
    this.flexService.resetCodeControl()
  }


  protected readonly length = length;
}
