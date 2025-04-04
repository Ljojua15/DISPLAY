import {Component, computed, inject} from '@angular/core';
import {FlexService} from '@/app/lib/services/flex.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'display-example',
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  public lessonsService = inject(FlexService);
  public $changedText$ =  computed(() => {
    return this.lessonsService.currentLesson?.texts
  })
}
