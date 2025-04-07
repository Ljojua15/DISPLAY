import {Component, computed, EventEmitter, inject, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoddingService} from '@/app/lib/services/codding.service';
import {FlexService} from '@/app/lib/services/flex.service';
import {debounceTime} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'display-codding',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './codding.component.html',
  styleUrl: './codding.component.scss'
})
export class CoddingComponent {
  @Output() resetTextareaEvent = new EventEmitter<void>();

  public readonly coddingService = inject(CoddingService);
  private readonly flexService  = inject(FlexService)


  public $code$ = this.flexService.$codeControl$;
  //
  public $isCorrect$ = computed(() => {
    return this.coddingService.isCodeCorrect()
  })

  public sessionArray = []

  ngOnInit(){
    this.$code$().valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.coddingService.$myCode$.set(this.$code$().value);
    });



  }

  public $codePlace$ = this.flexService.$codePlace$;



  public enterCode(direction: 'done'){
    this.coddingService.enterMyCode(direction);
  }

}
