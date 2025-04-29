import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {DecimalPipe, NgForOf} from '@angular/common';
import {Country} from '../../entities/country.entity';

@Component({
  selector: 'app-country-cards',
  templateUrl: './country-cards.component.html',
  imports: [
    DecimalPipe,
    NgForOf
  ],
  standalone: true,
  styleUrl: './country-cards.component.css'
})
export class CountryCardsComponent implements OnInit {
  data: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.getCountries();
  }

  private getCountries() {
    this.countriesService.getCountries().subscribe(
      (result ) => {
        this.data = result.response.countries.map((json: any) => Country.fromJson(json));
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }
}
