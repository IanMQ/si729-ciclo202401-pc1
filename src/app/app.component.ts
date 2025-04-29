import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './public/header/header.component';
import {FooterComponent} from './public/footer/footer.component';
import {CountryCardsComponent} from './countries/components/country-cards/country-cards.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CountryCardsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'si729-ciclo202401-pc1';
}
