import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {IContact} from '../../lib/interface/contact.interface';
import {CONTACT_CONFIG} from '../../lib/configs/contact.config';

@Component({
  selector: 'display-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public readonly contacts: IContact[] = CONTACT_CONFIG
}
