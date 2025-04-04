import {computed, Injectable, signal} from '@angular/core';
import {FLEX_CONFIG} from '@/app/lib/lessons/flex.config';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlexService {
  private flexConfig:any = FLEX_CONFIG

  public $codeControl$ = signal<FormControl>(new FormControl(''))
  public $currentLevel$ = signal<number>(1)


  public flexConfigLength = Object.keys(this.flexConfig).length;

  get currentLesson():any {
    console.log(this.flexConfig[this.$currentLevel$()])
    return this.flexConfig[this.$currentLevel$()];
  }

  public $codePlace$ = computed(() => this.currentLesson?.codePlace || []);

  public $movingDivs$ = computed(() => {
    return this.currentLesson?.movingDivs || []
  })

  public $targetDivs$ = computed(() => {
    return this.currentLesson?.targetDivs || [];
  });

  public $targetDivsStyle$ = computed(() => {
    return this.currentLesson?.targetDivsStyle?.[0] || {};
  });


  public $answer$ = computed(() => {
    return this.currentLesson?.answers || [];
  })

  public resetCodeControl() {
    this.$codeControl$().setValue('');
  }

  constructor() {
    console.log(this.$targetDivsStyle$())
  }

  public changeLevel(direct : 'prev' | 'next') {
    const nextLevel = direct === 'next' ? this.$currentLevel$() + 1 : this.$currentLevel$() - 1;
    if(nextLevel >= 1 && nextLevel <= this.flexConfigLength) {
      this.$currentLevel$.set(nextLevel)
    }
  }


}
