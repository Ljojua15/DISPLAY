import { Component } from '@angular/core';
import {CARDS_CONFIG} from '../../lib/configs/cards.config';
import {Cards} from '../../lib/interface/cards.interface';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'display-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public readonly cards:Cards[] = CARDS_CONFIG
}
