import {computed, Injectable, signal} from '@angular/core';
import {FLEX_CONFIG} from '@/app/lib/lessons/flex.config';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FlexService {
  private flexConfig:any = FLEX_CONFIG

  public codeControl = signal<FormControl>(new FormControl(''))
  public currentLevel = signal<number>(1)


  public flexConfigLength = Object.keys(this.flexConfig).length;

  get currentLesson():any {
    console.log(this.flexConfig[this.currentLevel()])
    return this.flexConfig[this.currentLevel()];
  }

  public $codePlace$ = computed(() => this.currentLesson?.codePlace || []);


  public $answer$ = computed(() => {
    return this.currentLesson?.answers || [];
  })


  // constructor() {
  //   console.log('test')
  //   setTimeout(() => {
  //     console.log("FlexService constructor", this.flexConfigLength);
  //     console.log(this.$codePlace$())
  //   },1000)
  // }


}
