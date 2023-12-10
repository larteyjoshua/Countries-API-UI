import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Country, Filters } from 'src/app/models';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  searchTerm: string = '';
  regionList: Filters[] = [
    {
      region: 'Africa',
      search: 'Africa',
    },
    {
      region: 'Americas',
      search: 'Americas',
    },
    {
      region: 'Asia',
      search: 'Asia',
    },
    {
      region: 'Europe',
      search: 'Europe',
    },
    {
      region: 'Oceania',
      search: 'Africa',
    },
  ];
  selectedRegion: Filters = {
    region: '',
    search: '',
  };
  listCountry: Country[] = [];
  countryListData: Country[] = [];

  constructor(
    private apiService: ApiService,
    private messageService: MessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getCountryApiCall();
  }

  getCountryApiCall() {
    this.apiService.getUsers().subscribe({
      next: (response: any) => {
        if (response.status === 200) {
          this.listCountry = response.body;
          this.countryListData = response.body;
        }
      },
      error: (error: any) => {
        {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error Fetching Countries!',
          });
        }
      },
    });
  }

  filterData() {
    if (this.searchTerm.length > 0) {
      const filteredData = this.countryListData.filter(
        (country) =>
          country.population === Number(this.searchTerm) ||
          country.region
            .toLowerCase()
            .startsWith(this.searchTerm.toLowerCase()) ||
          country.name
            .toLowerCase()
            .startsWith(this.searchTerm.toLowerCase()) ||
          country.capital
            .toLowerCase()
            .startsWith(this.searchTerm.toLowerCase()) ||
          country.short
            .toLowerCase()
            .startsWith(this.searchTerm.toLowerCase()) ||
          country.zip_code
            .toLowerCase()
            .startsWith(this.searchTerm.toLowerCase())
      );
      this.listCountry = [...filteredData];
    } else if (this.selectedRegion) {
      const filteredData = this.countryListData.filter(
        (country) => country.region === this.selectedRegion.region
      );
      this.listCountry = [...filteredData];
    } else {
      this.listCountry = [...this.countryListData];
    }
  }

  viewMap(country: Country) {
    this.router.navigate(['/map'], {
      state: { country: country }, 
    });
  }

  viewDetails(country: Country) {
    this.router.navigate(['/details'], {
      state: { country: country, fullData: this.countryListData }, 
    });
  }
}
