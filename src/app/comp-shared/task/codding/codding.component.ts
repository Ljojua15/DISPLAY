import {Component, computed, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoddingService} from '@/app/lib/services/codding.service';
import {FlexService} from '@/app/lib/services/flex.service';
import {debounceTime} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import {LocalStorageService} from '@/app/lib/services/local-storage.service';

@Component({
  selector: 'display-codding',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './codding.component.html',
  styleUrl: './codding.component.scss'
})
export class CoddingComponent implements OnInit {
  @Output() public resetTextareaEvent = new EventEmitter<void>();

  public readonly coddingService = inject(CoddingService);
  private readonly flexService  = inject(FlexService)
  private readonly localStorageService  = inject(LocalStorageService)

  public $code$ = this.flexService.$codeControl$;
  public $codePlace$ = this.flexService.$codePlace$;

  public sessionArray = []

  ngOnInit(){
    this.$code$().valueChanges.pipe(debounceTime(100)).subscribe(value => {
      this.coddingService.$myCode$.set(this.$code$().value);
    });
  }

  public $isCorrect$ = computed(() => {
    return this.coddingService.isCodeCorrect()
  })

  public enterCode(direction: 'done'){
    const value = this.$code$().value

    if (value) {
      const data = this.localStorageService.getLocalStorage()
      const newData = [...data, {id: this.flexService.$currentLevel$(), code: value}]

      this.localStorageService.setLocalStorage(newData)
    }

    this.coddingService.enterMyCode(direction);
  }
}
