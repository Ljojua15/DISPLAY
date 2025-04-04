import {Component, computed, inject, signal} from '@angular/core';
import {FlexService} from '@/app/lib/services/flex.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'display-levels-modal',
  imports: [CommonModule],
  templateUrl: './levels-modal.component.html',
  styleUrl: './levels-modal.component.scss'
})
export class LevelsModalComponent {
  public readonly flexService = inject(FlexService)
  public readonly idOfExamples:number[] = []
  public readonly $isLevelChanged$ = signal(false)


  constructor() {
    this.idOfExamples = Array.from({ length: this.flexService.flexConfigLength}, (_, i) => i+1);
  }

  public $activeItem$ = computed(() => {
    return this.flexService.$currentLevel$()
  })

  public changeLevelFromButton(id:number){
    this.flexService.$currentLevel$.set(id);
    this.$isLevelChanged$.set(true)
    this.flexService.resetCodeControl()
  }

}
