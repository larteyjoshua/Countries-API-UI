import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country, Filters } from 'src/app/models';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country: Country = {
    name: '',
    flag: '',
    population: 0,
    region: '',
    capital: '',
    zip_code: '',
    short: '',
    location: [],
    sub_region: '',
    tld: [],
    languages: [],
    map: {
      googleMaps: '',
      openStreetMaps: '',
    },
    currencies: [],
    nativeName: [],
    borders: [],
    cca3: ''
  };
  countryList: Country[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const data = navigation?.extras?.state;
    console.log(data);
    this.country = data?.['country'];
    this.countryList = data?.['fullData'];
  }
  ngOnInit(): void {}

  goToCountry(border: string) {
    console.log(border);
    const FilterCountry = this.countryList.find((country) => country.cca3 === border);
    this.country=FilterCountry!;
    this.router.navigate(['/details']);
  }

  getCountryName(border: string) {
    const FilterCountry = this.countryList.find((country) => country.cca3 === border);
   return FilterCountry?.name;
  }
}
