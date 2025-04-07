import {AfterViewInit, Component, computed, inject, signal} from '@angular/core';
import {FlexService} from '@/app/lib/services/flex.service';
import {LevelsModalComponent} from '@/app/comp-shared/task/levels/levels-modal/levels-modal.component';
import {CommonModule} from '@angular/common';
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
export class LevelsComponent implements AfterViewInit{
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
    // if(this.flexService.$codeControl$().value){
    //   this.flexService.$codeControl$().setValue(currentLevel?.code);
    // }else{
    //   this.flexService.$codeControl$().setValue('');
    // }
  }


}
