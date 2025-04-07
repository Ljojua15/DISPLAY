import {Component, computed, effect, inject, OnInit, signal} from '@angular/core';
import {FlexService} from '@/app/lib/services/flex.service';
import {LevelsModalComponent} from '@/app/comp-shared/task/levels/levels-modal/levels-modal.component';
import {CommonModule} from '@angular/common';
import {CoddingService} from '@/app/lib/services/codding.service';
import {LocalStorageService} from '@/app/lib/services/local-storage.service';

@Component({
  selector: 'display-levels',
  imports: [
    LevelsModalComponent,
    CommonModule
  ],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.scss'
})
export class LevelsComponent {
  public flexService = inject(FlexService)
  public coddingService = inject(CoddingService)


  public $currentLevel$ = computed(()=>{
    return this.flexService.$currentLevel$();
  })

  public $quantityOfLessons$ = computed(()=>{
    return this.flexService.flexConfigLength;
  })

  public changeLevel(direction: 'prev' | 'next') {
    this.flexService.changeLevel(direction);
    this.flexService.resetCodeControl()
  }
  public readonly $isLevelOpens$ = signal<boolean>(false);

  public openLevelPopup(){
    this.$isLevelOpens$.update((prev) => !prev);
  }



}
