import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {LanguageSelectorComponent} from '../language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbar,
    LanguageSelectorComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
