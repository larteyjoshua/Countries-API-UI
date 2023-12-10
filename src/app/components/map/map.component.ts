import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  country: Country={
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
      openStreetMaps: ''
    },
    currencies: [],
    nativeName: [],
    borders: [],
    cca3: ''
  };
   map: any;
  
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const data = navigation?.extras?.state;
   
    this.country = data?.['country'];
  }
  ngOnInit(): void {
    const lat = this.country.location[0];
    const long = this.country.location[1];
    const mapUrl = this.country.map.openStreetMaps;
    
    // Create a map
    this.map = L.map('map', {
      center: [lat, long],
      zoom: 3
    });
    
    
    // Add OpenStreetMap tiles
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    
    tiles.addTo(this.map);
  
    // Add a marker for the selected location
    const marker = L.marker([lat, long]).addTo(this.map);
    
    // Add a popup to the marker showing the coordinates
    marker.bindPopup(`<strong>${this.country.name}</strong> <br> Latitude: ${lat}<br>Longitude: ${long}`).openPopup();
    
  }
}
