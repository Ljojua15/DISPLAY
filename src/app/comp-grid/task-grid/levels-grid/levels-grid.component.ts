import {AfterViewInit, Component, computed, inject, signal} from '@angular/core';
import {LevelsModalComponent} from "@/app/comp-shared/task/levels/levels-modal/levels-modal.component";
import {CommonModule, NgIf} from "@angular/common";
import {
  LevelsModalGridComponent
} from '@/app/comp-grid/task-grid/levels-grid/levels-modal-grid/levels-modal-grid.component';
import {FlexService} from '@/app/lib/services/flex.service';
import {LocalStorageService} from '@/app/lib/services/local-storage.service';

@Component({
  selector: 'display-levels-grid',
  imports: [
    CommonModule,
    LevelsModalGridComponent,
    LevelsModalComponent
  ],
  templateUrl: './levels-grid.component.html',
  styleUrl: './levels-grid.component.scss'
})
export class LevelsGridComponent implements AfterViewInit{
  public flexService = inject(FlexService)
  public localStorageService = inject(LocalStorageService)

  public readonly $isLevelOpens$ = signal<boolean>(false);

  constructor() {

  }
  ngAfterViewInit(): void {
    this.reloadData()
  }


  public $currentLevel$ = computed(()=>{
    return this.flexService.$currentLevel$();
  })

  public $quantityOfLessons$ = computed(()=>{
    return this.flexService.flexConfigLength;
  })

  public changeLevel(direction: 'prev' | 'next') {
    this.flexService.changeLevel(direction);
    this.flexService.resetCodeControl()
    this.reloadData()
  }

  public openLevelPopup(){
    this.$isLevelOpens$.update((prev) => !prev);
  }

  private reloadData() {
    const data = this.localStorageService.getLocalStorage()
    const currentLevel = data.find(d => d.id === this.flexService.$currentLevel$());
    this.flexService.$codeControl$().setValue(currentLevel?.code);
  }

}
