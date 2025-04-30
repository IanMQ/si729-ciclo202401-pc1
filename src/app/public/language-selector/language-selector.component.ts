import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-language-selector',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './language-selector.component.html',
  standalone: true,
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  currentLang: string = 'en';
  languages: string[] = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang;
  }

  useLanguage(language: string): void {
    this.translateService.use(language);
  }

}
