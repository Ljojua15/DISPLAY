import { Component } from '@angular/core';
import {IHeader} from '../../lib/interface/header.interface';
import {HEADER_CONFIG} from '../../lib/configs/header.config';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'display-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public readonly headers:IHeader[] = HEADER_CONFIG;

  public setActivePage(header:IHeader){
    this.headers.forEach((x) => x.isActive = false);
    header.isActive = true;
  }
}
